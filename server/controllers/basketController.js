const { Basket, BasketDevice } = require("../models/models");

const getBasketId = async userId => {
  const basket = await Basket.findAll({ where: { userId } }); // id,userId
  const basketId = basket[0].dataValues.id;
  return basketId;
};

class basketController {
  async createBaskeDevicetById(req, res) {
    const user = req.user;
    const body = req.body; //device.id
    const userId = user.id;
    const basketId = await getBasketId(userId);

    const basketDevice = await BasketDevice.create({
      basketId: basketId,
      deviceId: body.id,
    }); // id,userId

    return res.json(basketDevice);
  }

  async getBasketDevicesById(req, res) {
    const user = req.user;

    const userId = user.id;
    const basketId = await getBasketId(userId);

    const listBasketDevices = await BasketDevice.findAll({
      where: { basketId },
    });

    return res.json(listBasketDevices);
  }
}

module.exports = new basketController();
