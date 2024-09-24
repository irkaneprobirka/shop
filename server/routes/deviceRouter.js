const Router = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");
const checkRoleMiddlewear = require("../middlewear/checkRoleMiddlewear");

router.post("/", checkRoleMiddlewear("ADMIN"), deviceController.create);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);
router.delete("/delete/:deviceId", deviceController.deleteDevice);

module.exports = router;
