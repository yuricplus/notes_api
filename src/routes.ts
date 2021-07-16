const router = require("express");
const routes = router.Router();

const UserIdController = require('./app/controller/UserIdController');
const NotesController = require('./app/controller/NotesController')

routes.get("/user/:id", UserIdController.index);

routes.post("/user", UserIdController.store);

routes.get("/notes/:id", NotesController.store);

routes.post("/notes", NotesController.create)

routes.delete("/notes/:id", NotesController.delete)
routes.put("/notes", NotesController.delete)

module.exports = routes;