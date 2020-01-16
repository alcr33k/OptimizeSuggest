const brain = require('brain.js');
const trainingData = require('./trainingData');

const net = new brain.NeuralNetwork({
    hiddenLayers: [6, 6]
});

// net.train(trainingData);

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

net.train(normalizedTrainingData, {
    // log: (stats) => console.log(stats),
    // logPeriod: 2000,
    iterations: 10000
});

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

function sortData(data, numberOfOptions) {
    let keys = Object.keys(data);
    keys.sort((a, b) => data[b] - data[a]);
    let topChoices = keys.slice(0, numberOfOptions);
    let res = '';
    for (let i = 0; i < topChoices.length; i++) {
        let percentage = Math.round(data[topChoices[i]] * 100 * 10) / 10;
        if (percentage === 0) {
            break;
        }
        res = res + "#" + (i+1) + ': ' + topChoices[i] + ' with a certainty of ' + percentage + '%' + '\r\n';

    }
    return res;
}

const sortedData = sortData(data, 5);

console.log(sortedData);