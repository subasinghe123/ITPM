const mongoose = require('mongoose');
const config = require('../config');

const connect = () => mongoose.connect(config.databaseConnectionString);

module.exports = {
    connect
}
