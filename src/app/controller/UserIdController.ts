const UserId = require('../model/UserId');

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
  
      return res.json(data)
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
  };

  async index(req:object, res:any) {
    console.log('oii')
    try {
      const data = await UserId.find({});

      return res.json(data)
    } catch (error) {
      return res.json({error}) 
    }
  }
}

module.exports = new UserIdController();

export {}