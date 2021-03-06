const mongodb = require('mongoose');

const NoteSchema = mongodb.Schema(
  {
    title: {
      type: String,
      require: true
    },
    author: {
      type: String,
      require: true
    },
    note: {
      type: String,
      require: true
    },
    date: {
      type: String,
      require: true
    },
    id: {
      type: String,
      require: true
    }
  }
)

module.exports = mongodb.model('Notes', NoteSchema)