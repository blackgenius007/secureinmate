// importData.js

const mongoose = require('mongoose');
const fs = require('fs');
const inmates = require( '../../models/Inmates'); 
 

async function importData(dataFilePath) {
  try {
    // Connect to MongoDB
    console.log(process.env.MONGO_URI)
    await mongoose.connect('mongodb+srv://secureInmate:olami123@2virtual.zv9px8k.mongodb.net/SecureInmate?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB.');

    // Read data from the specified file
    const rawData = fs.readFileSync(dataFilePath);
    const data = JSON.parse(rawData);

    // Import data into the database
    const result = await inmates.insertMany(data);

    console.log(`Imported ${result.length} records into the database.`);
  } catch (error) {
    console.error('Import failed:', error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}

const dataFilePath = process.argv[2]; // Assuming the data file path is passed as the first argument

if (!dataFilePath) {
  console.error('Please provide the path to the data file as an argument.');
  process.exit(1);
}

importData(dataFilePath)
  .then(() => {
    console.log('Import completed.');
    process.exit(0);
  })
  .catch(error => {
    console.error('Import failed:', error);
    process.exit(1);
  });
