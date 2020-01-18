const express = require('express');
const suggestProduct = require('./neuralNet');
// will ev need body pasrser to read post request data
// folder structure might change depending on herokuapp

// Server for backend made in express.js
const app = express();
app.use(express.json()); // handle JSON body in express

const port = 1337;

app.post('/api/recommendations', (req, res) => {
    let reqData = req.body;
    console.log('body', req.body);
    let suggestedProduct = suggestProduct(reqData);
    res.send(suggestedProduct);
    // for now send hello world, sen läs data och skicka till brain.js
});

app.listen(port, () => console.log('Server started on port ' + port));