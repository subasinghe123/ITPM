const express = require('express');
const database = require('./util/database');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();

middleware(app);
routes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        return console.log(err.message);
    }
    console.log(`running on ${PORT}`);
});

database.connect().then(() => console.log(`Connected to database`)
).catch(err => console.log(err.message));