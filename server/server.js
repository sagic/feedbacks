var express = require('express');
var app = express();
var router = express.Router();
var storage = require('node-persist');

storage.initSync({
    dir: 'localstorage/feedbacks',
    stringify: JSON.stringify,
    parse: JSON.parse,
    encoding: 'utf8',
    logging: false,
    continuous: true,
    interval: false
});


app.get('/hello', function (req, res) {
    res.json({
        hello: 'Hello World!',
        test: storage.getItemSync('fibonacci')
    });
});

router.route('/feedbacks').get(function (req, res) {
    var feedbacks = storage.values();//storage.valuesWithKeyMatch('feedback');
    res.json({
        test: '123',
        feedbacks: feedbacks
    });
});


router.route('/kill').get(function (req, res) {
    storage.clearSync();
    res.json({
        status: 'success'
    });
});

router.route('/feedback/:id').get(function (req, res) {
    var feedback = storage.getItemSync('feedback_' + req.params.id);
    res.json({
        key: 'feedback_' + req.params.id,
        feedback: feedback
    });
});

router.route('/feedback').post(function (req, res) {
    var feedback = req.body;
    var counter = storage.getItemSync('counter');
    if (!counter || isNaN(counter)) {
        counter = 0;
        storage.setItemSync('counter', counter);
    }
    counter++;
    storage.setItemSync('feedback_' + counter, 'feedback');
    storage.setItemSync('counter', counter);
    res.json({
        body: req.body,
        key: 'feedback_' + counter,
        added: storage.getItemSync('feedback' + counter)
    });
});

app.use(express.static(process.argv[2]), router);
app.listen(process.argv[3]);



