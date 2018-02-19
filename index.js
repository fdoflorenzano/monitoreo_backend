const express = require('express');
const app = express();

const Variable = require('./db').Variable;

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json('Internal Server Error.');
});

app.get('/all', (req, res) => Variable.find({}, (err, variables) => res.json(variables)));

app.get('/context/:context', (req, res) => {
    const context = req.params.context;
    Variable.find({
        context
    }, (err, variables) => res.json(variables));
});

app.get('/challenge/:challenge', (req, res) => {
    const challenge = req.params.challenge;
    Variable.find({
        challenge
    }, (err, variables) => res.json(variables));
});

const server = app.listen(3000, () => {
    console.log(`Server running at localhost:${server.address().port}`);
});