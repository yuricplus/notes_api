"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserId = require('../model/UserId');
class UserIdController {
    async store(req, res) {
        try {
            if (await UserId.findOne({ id: req.body.id })) {
                return res.status(400).json({
                    error: "This Id alredy taken"
                });
            }
            const data = await UserId.create(req.body);
            return res.json(data);
        }
        catch (error) {
            return res.status(500).json({
                error
            });
        }
    }
    ;
    async index(req, res) {
        try {
            const data = await UserId.find({});
            return res.json(data);
        }
        catch (error) {
            return res.json({ "error": 'error' });
        }
    }
}
module.exports = new UserIdController();
//# sourceMappingURL=UserIdController.js.map