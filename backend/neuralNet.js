const brain = require('brain.js');
const trainingData = require('./trainingData');

// create a brain nuralneywork with 6x6 hidden layers
const net = new brain.NeuralNetwork({
    hiddenLayers: [6, 6]
});

// clone trainingData
const normalizedTrainingData = [...trainingData];

// normalize the cloned data
normalizeTrainingData();

function normalizeTrainingData() {
    for (let i = 0; i < normalizedTrainingData.length; i++) {
        const input = normalizedTrainingData[i].input;
        Object.keys(input).forEach((key) => input[key] = input[key] / 5);
    }
}

// train the network with 10000 iterations
net.train(normalizedTrainingData, {
    // log: (stats) => console.log(stats),
    // logPeriod: 2000,
    iterations: 10000
});

// function for testing the network
function testNetwork() {
    let _skillLevel = 5;
    let _skiPreference = 5;
    let _turnPreference = 5;
    let _size = 3;

    let data = net.run({ 
        skillLevel: _skillLevel/5, 
        skiPreference: _skiPreference/5, 
        turnPreference: _turnPreference/5, 
        size: _size/5
    });

    const sortedData = sortData(data, 5); 
    console.log(sortedData);
}

// sort the sata from the AI, numberofoptions is the max number of suggestions from the AI
function sortData(data, numberOfOptions) {
    let keys = Object.keys(data);
    keys.sort((a, b) => data[b] - data[a]);
    let topChoices = keys.slice(0, numberOfOptions);
    let res = [];
    for (let i = 0; i < topChoices.length; i++) {
        let percentage = Math.round(data[topChoices[i]] * 100 * 10) / 10;
        if (percentage === 0) {
            break;
        }
        res.push({
            name: topChoices[i],
            certainty: percentage
        });
    }
    return res;
}

const suggestProduct = function(inputData) {
    // kör AI med normaliserad data
    let data = net.run({ 
        skillLevel: inputData[0] / 5, 
        skiPreference: inputData[1] / 5, 
        turnPreference: inputData[2] / 5, 
        size: inputData[3] / 5
    });
    let sortedData = sortData(data, 5); 

    return sortedData;
}

module.exports = suggestProduct;