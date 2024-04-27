const { MongoClient, ServerApiVersion } = require('mongodb')

const uri = "mongodb+srv://cebureknakazanskom2:UICCg54j96abGhVQ@cluster0.bjubufi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(uri, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   },
   ssl: true,
   tls: true,
})

async function connect(dbName) {
   try {
      console.log('Connected to MongoDB')
      return client.db(dbName)
   } catch (error) {
      console.error('Error connecting to MongoDB:', error)
      throw error
   }
}

async function close() {
   try {
      if (client) {
         await client.close()
         console.log('MongoDB connection closed')
      }
   } catch (error) {
      console.error('Error closing MongoDB connection:', error)
   }
}

module.exports = { connect, close }
