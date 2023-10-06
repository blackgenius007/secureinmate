const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017'; // Replace with your MongoDB server URL
const dbName = 'your_db_name'; // Replace with your database name

// Create a MongoDB client
const client = new MongoClient(url, { useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect((err) => {
  assert.strictEqual(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  // Perform import or any other database operations here

  // Close the client
  client.close();
});
