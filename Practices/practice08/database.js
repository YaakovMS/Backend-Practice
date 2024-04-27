const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://yaakovsabbah:senhadocluster@cluster0.5ftoavd.mongodb.net/';

const connectDb = async () => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('agenda');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
};

module.exports = { connectDb };
