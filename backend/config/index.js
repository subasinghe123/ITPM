require('dotenv').config();

module.exports = {
    databaseConnectionString: process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017',
    port: process.env.PORT || 3000
};
