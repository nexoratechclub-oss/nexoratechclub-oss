const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const mongoDbConnect = require('./config/mongo.db.connect');
const userRoutes = require('./routes/user.routes');

dotenv.config();

const app = express();

mongoDbConnect();

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});