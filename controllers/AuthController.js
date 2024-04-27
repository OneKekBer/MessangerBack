const { connect, close } = require('./../utils/mongo')


const LogIn = async (req, res) => {
   const db = await connect("sample_mflix")
   try {
      const users = await db.collection('users').find().toArray()
      console.log(users.length)
      res.json(users)
   } catch (error) {
      console.log(error)
   }
}


const Register = async (req, res) => {

   const db = await connect("auth")

   const { password, username } = req.body

   const existingUser = await db.collection('users').findOne({ username })

   if (existingUser) {
      return res.status(409).json({ error: 'User already exists' })
   }

   try {
      await db.collection('users').insertOne({ username, password })
      return res.status(200).json({ msg: "User created successfully", isOk: ok })

   } catch (error) {
      return res.status(404).json({ error: "smth went wrong" })

   }
}
//need add validation



module.exports = { Register, LogIn }