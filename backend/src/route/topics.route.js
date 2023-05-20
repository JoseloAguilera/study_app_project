const topicController = require("../controller/topics.controller");
const authMiddleware = require('../middleware/auth.controller');

module.exports = function (app) {
    app.get("/topics/list", authMiddleware.auth, topicController.listar);
    app.get("/topics/:id", authMiddleware.auth, topicController.buscarPorCodigo);
    app.post("/topics/update", authMiddleware.auth, topicController.actualizar);
    app.delete("/topics/delete/:id", authMiddleware.auth, topicController.eliminar);
};