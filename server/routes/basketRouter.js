const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");
const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/createBasketDevice",
  authMiddleware,
  basketController.createBaskeDevicetById
);

router.get(
  "/getBasketDevices",
  authMiddleware,
  basketController.getBasketDevicesById
);

module.exports = router;
