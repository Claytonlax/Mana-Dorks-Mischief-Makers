const express = require("express");
const db = require('../db/connection');

const app = express();

app.get('/', (req, res) => {
    const query = "select * from cards";
    db.query(query, (err, response) => {
        if(err) {
            console.error(err);
            res.status(500).end();
        } else {
            const responseString = JSON.stringify(response);
            res.send(responseString);
        }

    });

    res.end();
});

module.exports = app;