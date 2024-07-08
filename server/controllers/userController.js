const ApiError = require("../error/ApiError");

class UserController {
  async register(res, req) {}

  async login(req, res) {}

  async check(req, res, next) {
    try {
      console.log("Query parameters:", req.query); // Логирование для диагностики

      if (!req.query) {
        return next(ApiError.badRequest("Query parameters are missing"));
      }

      const { id } = req.query;
      if (!id) {
        return next(ApiError.badRequest("ID is required"));
      }

      res.json({ id });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
