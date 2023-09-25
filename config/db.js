const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });

        console.log('Mongo Db connected');
    } catch(err) {
        console.log(err.message);

        // Exit process wth failure
        process.exit(1);
    }
}

module.exports = connectDB;
