const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddlewear = require("../middlewear/authMiddlewear")

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/auth", authMiddlewear, userController.check);

module.exports = router;
