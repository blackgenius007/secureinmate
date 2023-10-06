const data = require('../seed.json'); // Load your data from a JSON file

const collection = db.collection('your_collection_name'); // Replace with your collection name

// Insert data into the collection
collection.insertMany(data, (err, result) => {
  assert.strictEqual(err, null);
  console.log('Data inserted successfully:', result);
});
