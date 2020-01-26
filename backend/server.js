const express = require('express');
const suggestProduct = require('./neuralNet');

// Server for backend made in express.js
const app = express();
app.use(express.json()); // handle JSON body in express

const port = process.env.PORT || 1337;

app.post('/api/recommendations', (req, res) => {
    let reqData = req.body;
    let suggestedProduct = suggestProduct(reqData); // send the request data to the neural network
    res.send(suggestedProduct); // send back the suggested products
});

// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendfile(__dirname + '/public/index.html'));
}

app.listen(port, () => console.log('Server started on port ' + port));