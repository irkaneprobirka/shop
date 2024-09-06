const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandController");
const checkRoleMiddlewear = require("../middlewear/checkRoleMiddlewear");

router.post("/", checkRoleMiddlewear('ADMIN'), brandController.create);
router.get("/", brandController.getAll);

module.exports = router;
