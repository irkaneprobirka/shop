const { BasketDevice, Device } = require("../models/models");

class BasketController {
  async addDevice(req, res) {
    try {
      const { basketId, deviceId } = req.body;
      const basketDevice = await BasketDevice.create({ basketId, deviceId });

      return res.json({ basketDevice });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllBasket(req, res) {
    try {
      const { basketId } = req.params;
      const productIdArray = [];
  
      if (!basketId) {
        return res.status(400).json({ message: "basketId is required" });
      }
  
      const basketDevice = await BasketDevice.findAll({
        where: { basketId },
      });
  
      if (!basketDevice.length) {
        return res.status(200).json({ message: "Ваша корзина пуста" });
      }
  
      basketDevice.map((el) => productIdArray.push(el.deviceId));
  
      const products = await Promise.all(
        productIdArray.map(async (el) => {
          const product = await Device.findOne({
            where: { id: el },
          });
          return product;
        })
      );
  
      return res.json(products);
    } catch (error) {
      console.error("Error retrieving basket items:", error);
    }
  }
  
}

module.exports = new BasketController();
