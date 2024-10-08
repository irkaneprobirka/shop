const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo, Basket, BasketDevice } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info, description } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
        description
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }
      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    let devices;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        offset,
        limit,
      });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        offset,
        limit,
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId, brandId },
        offset,
        limit,
      });
    }
    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: {
        id,
      },
      include: [
        {
          model: DeviceInfo,
          as: "info",
        },
      ],
    });
    return res.json(device);
  }

  async deleteDevice(req, res) {
    try {
      const {deviceId} = req.params;
      const deleteDevice = await Device.destroy({
        where : {
          id : deviceId
        }
      })
      const deleteBasketDevice = await BasketDevice.destroy({
        where : {
         deviceId,
        }
      })
      return res.json(deleteDevice)
    } catch (error) {
      console.error("Error retrieving basket items:", error);
    }
  }
}

module.exports = new DeviceController();
