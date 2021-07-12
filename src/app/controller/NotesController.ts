const NoteModel = require('../model/Note');
const UserIdModel = require('../model/UserId')

class NotesController {
  async store(req:any, res:any) {
    const userId = req.params.id;

    const notes = await NoteModel
      .find({ author: userId })
      .populate('notes');

    return res.json(notes)
    
  }

  async create(req:any, res:any) {
    const { author } = req.body;
    const user = await UserIdModel.findOne({id: author})
    if(!author || !user) {
      return res.json({error: "This UserId doesn't exist or is empty"})
    }
    
    const data = new NoteModel(req.body);

    await data.save();

    return res.json({success: true})
  }
}

module.exports = new NotesController();

export {}