const Router = require("express");
const basketController = require("../controllers/basketController");
const router = new Router();

router.post("/", basketController.addDevice);
router.get("/:basketId", basketController.getAllBasket);


module.exports = router;
