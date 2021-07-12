const router = require("express");
const routes = router.Router();
const UserIdController = require('./app/controller/UserIdController');
routes.get("/", function (req, res) {
    return res.send("Minha primeira rota!");
});
console.log('LOG', UserIdController);
routes.get("/user", UserIdController.index);
routes.post("/user", UserIdController.store);
module.exports = routes;
//# sourceMappingURL=routes.js.map