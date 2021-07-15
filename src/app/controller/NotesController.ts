const NoteModel = require('../model/Note');
const UserIdModel = require('../model/UserId')
const crypto = require('crypto')

class NotesController {
  async store(req:any, res:any) {
    const userId = req.params.id;

    const notes = await NoteModel
      .find({ author: userId })
      .populate('notes');

    return res.json(notes)
    
  }

  async create(req:any, res:any) {
    const { author, date, title, note } = req.body;
    const user = await UserIdModel.findOne({id: author})

    if(!author || !user) {
      return res.json({error: "This UserId doesn't exist or is empty"})
    }
    const id = crypto.randomBytes(6).toString('HEX');
    
    const data = new NoteModel({
      id,
      note,
      date,
      author,
      title
    });

    await data.save();

    return res.json({success: true})
  }

  async delete(req: any, res:any) {
    const { id } = req.body;
    
    try {
      await UserIdModel.findOne({id}).delete();

      return res.json({success: true})
    } catch (error) {
      return res.json({error: true})
    }
  }

  async edit(req: any, res:any) {
    const { id } = req.body;
    
    try {
      await UserIdModel.findOne({id});

      return res.json({success: true})
    } catch (error) {
      return res.json({error: true})
    }
  }
}

module.exports = new NotesController();

export {}