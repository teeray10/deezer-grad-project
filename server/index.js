const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on port: " + process.env.PORT);
});