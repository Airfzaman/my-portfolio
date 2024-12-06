// import { MongoClient } from 'mongodb';

// // MongoDB connection
// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri);
// const dbName = 'myDatabase'; // Database Name
// const collectionName = 'contacts'; // Collection Name

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       await client.connect();
//       const db = client.db(dbName);
//       const collection = db.collection(collectionName);

//       // Insert form data into the collection
//       const result = await collection.insertOne(req.body);

//       res.status(200).json({ message: 'Message sent successfully!', result });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error saving the message.', error });
//     } finally {
//       await client.close();
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
