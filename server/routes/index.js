const Router = require("express");
const router = new Router();
const deviceRouter = require("./deviceRouter");
const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const brandRouter = require("./brandRouter");
const basketRouter = require("./basketRoute");

router.use("/user", userRouter);
router.use("/brand", brandRouter);
router.use("/type", typeRouter);
router.use("/device", deviceRouter);
router.use("/basket", basketRouter);

module.exports = router;
