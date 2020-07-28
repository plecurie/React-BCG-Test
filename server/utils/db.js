const MONGO_USERNAME = 'dbUser';
const MONGO_PASSWORD = 'dbUserPassword';
const MONGO_HOSTNAME = 'cluster0.f9igl.mongodb.net';
const MONGO_DB = 'paristaxiflare';

const mongoose = require('mongoose');
const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?authSource=admin`;

exports.dbConnect = () => {
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true });
};
