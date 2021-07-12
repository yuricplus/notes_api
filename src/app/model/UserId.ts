const mongo = require('mongoose');
const Schema = mongo.Schema;

const UserIdSchema = new mongo.Schema(
  {
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
    },
    notes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Notes'
      }
    ]
  }
);

module.exports = mongo.model("UserId", UserIdSchema)

export {}