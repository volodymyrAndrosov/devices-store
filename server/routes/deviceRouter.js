const Router = require("express");
const deviceRouter = require("../controllers/deviceController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const router = new Router();

router.post("/", checkRoleMiddleware("ADMIN"), deviceRouter.createDevice);
router.get("/", deviceRouter.getAllDevice);
router.get("/:id", deviceRouter.getSingleDevice);

module.exports = router;
