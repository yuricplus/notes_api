"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo = require('mongoose');
const UserIdSchema = new mongo.Schema({
    id: {
        type: String,
        required: true
    },
    hasPassword: {
        type: Boolean,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    dateTodelete: {
        type: String,
        required: false
    }
});
module.exports = mongo.model("UserId", UserIdSchema);
//# sourceMappingURL=UserId.js.map