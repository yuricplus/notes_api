const UserId = require('../model/UserId');
const NoteModel = require('../model/Note');
const crypto = require('crypto')

class UserIdController {
  async store(req: any, res: any) {
    const { id } = req.body;
    
    try {
      if(await UserId.findOne({id})) {
        return res.status(400).json(
          {
            error: "This Id alredy exist"
          }
        )
      }
      const data = await UserId.create(req.body)
      const idNote = crypto.randomBytes(6).toString('HEX');
    
      const notes = new NoteModel({
        id: idNote,
        note: '',
        date: new Date(),
        author: id,
        title: 'Untitled'
      });

      await notes.save();
  
      return res.json(data)
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
  };

  async index(req:any, res:any) {
    const { id } = req.params;
    const user = await UserId.findOne({id})
    if(!user) {
      return res.status(400).json(
        {
          error: "This Id alredy exist"
        }
      )
    }
    return res.status(200).json({succes: true})
  }
}

module.exports = new UserIdController();

export {}