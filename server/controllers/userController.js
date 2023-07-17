const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJWT = (id, email, role) =>
  jwt.sign(
    {
      id,
      email,
      role,
    },
    process.env.SECRET_KEY,
    { expiresIn: "20h" }
  );

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;

    if (!email && !password) {
      return next(ApiError.badRequest("not correct data"));
    }

    const userExist = await User.findOne({ where: { email } });

    if (userExist) {
      return next(ApiError.badRequest("user with this email already created"));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });

    const token = generateJWT(user.id, user.email, user.role);

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return next(ApiError.badRequest("user not exist"));
    }

    const comparedPassword = bcrypt.compareSync(password, user.password);
    if (!comparedPassword) {
      return next(ApiError.internal("invalid password"));
    }

    const token = generateJWT(user.id, user.email, user.role);

    return res.json({ token });
  }

  async authCheck(req, res, next) {
    const { id, email, role } = req.user;
    const token = generateJWT(id, email, role);

    return res.json({ token });
  }
}

module.exports = new UserController();
