const mongoose = require('mongoose');

const uri = `mongodb://root:${process.env.MONGO_PASS}@localhost:27017/monitoreo`;
mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => console.log('Connection to db stablished!'));

const variableSchema = mongoose.Schema({
    name: String,
    title: String,
    comments: [String],
    link: String,
    source: String,
    context: String,
    challenge: {
        name: String,
        dimension: String
    },
    geo: Boolean,
    data: {},
});

exports.Variable = mongoose.model('Variable', variableSchema);
