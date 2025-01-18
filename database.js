const { MongoClient } = require("mongodb");
const url ="mongodb+srv://gauravchakravorty:Jaiguru%40321@testmynodeapp.9iknl.mongodb.net/"

const client = new MongoClient(url);

// Database Name
const dbName = "UserDB";

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('Users');

    //Insert
    const user = {
        user_name: 'STB2',
        device_id: '321321321',
        household_id: '009988776655',
        location: 'UK'
    }
    const insertResult = await collection.insertOne(user);
    console.log('Inserted documents =>', insertResult);
  
    //Read
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
  
    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

