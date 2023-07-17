const Router = require("express");
const typeController = require("../controllers/typeController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

const router = new Router();

router.post("/", checkRoleMiddleware("ADMIN"), typeController.createType);
router.get("/", typeController.getAllTypes);

module.exports = router;
