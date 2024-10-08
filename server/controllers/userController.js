const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async register(req, res, next) {
    const { email, password, name, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный email или password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      role,
      name,
      password: hashPassword,
    });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    console.log(token);
    return res.json({ token, user });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({
      where: { email },
    });
    if (!user) {
      return next(
        ApiError.internal("Пользователь с такой почтой не существует")
      );
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(user.id, user.email, user.role);
    console.log(token);
    return res.json({ token, user });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }

  async getOneUser(req, res) {
    const { id } = req.params;
    console.log(id)
    if(!id){
      return res.json("уцалыжфвопрталыфомилвоыаило")
    }
    const user = await User.findOne({
      where: {
        id,
      },
    });
    return res.json({user})
  }
}

module.exports = new UserController();
