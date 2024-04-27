const WebSocket = require("ws")
const { MongoClient, ServerApiVersion } = require('mongodb')
const express = require('express')
const cors = require('cors')
const { client } = require('./utils/mongo.js')


const authRoutes = require('./routes/authRoutes.js')

const expressPort = 4000
const wsPort = 5553


const app = express()

app.use(cors())
app.use(express.json())


app.use("/auth", authRoutes)



const wss = new WebSocket.Server({ port: wsPort })


app.get('/', () => {
   console.log("hello world!!")
})



wss.on("connection", (ws) => {
   console.log("connected")

   ws.on("message", (data) => {
      const message = data.toString('utf-8')
      console.log("Received message:", message)
   })

   ws.send("hi", (err) => {
      if (err) {
         console.error("Error sending message:", err)
      }
   })


})

wss.on("listening", () => {
   console.log("Server is listening on port 5553")
})

app.listen(expressPort, () => {
   console.log(`listening on port: ${expressPort}`)
})
