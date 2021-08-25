const express = require('express');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '../../dist'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.get('/api*', (req, res) => {
    const url = buildURL(req);
    request(
        { url: url },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }
            res.json(JSON.parse(body));
        }
    )
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '../../dist/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on port: " + process.env.PORT);
});

function buildURL(req) {
    let newUrl = req.originalUrl.replace('/api', '');

    console.log(newUrl);
    return 'https://api.deezer.com' + newUrl;
}