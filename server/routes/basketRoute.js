const Router = require("express");
const basketController = require("../controllers/basketController");
const router = new Router();

router.post("/", basketController.addDevice);
router.get("/:basketId", basketController.getAllBasket);
router.delete("/delete/:basketDeviceId", basketController.deleteDevice);

module.exports = router;
