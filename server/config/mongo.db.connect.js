const mongoose = require('mongoose');

const mongoDbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        process.exit(1);
    }
};

module.exports = mongoDbConnect;