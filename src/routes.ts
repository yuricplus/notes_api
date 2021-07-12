const router = require("express");
const routes = router.Router();

const UserIdController = require('./app/controller/UserIdController');
const NotesController = require('./app/controller/NotesController')

routes.get("/user", UserIdController.index);

routes.post("/user", UserIdController.store);

routes.get("/notes/:id", NotesController.store);

routes.post("/notes", NotesController.create)

module.exports = routes;