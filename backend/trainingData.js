const trainingData = [
    { input: { skillLevel: 1, skiPreference: 3, turnPreference: 3, size: 3 }, output: { "Beginner Carving Ski": 1 } },
    { input: { skillLevel: 3, skiPreference: 3, turnPreference: 1, size: 3 }, output: { "Intermediate Carving Ski": 1 } },
    { input: { skillLevel: 5, skiPreference: 3, turnPreference: 3, size: 3 }, output: { "Advanced Carving Ski": 1 } },
    { input: { skillLevel: 2, skiPreference: 4, turnPreference: 3, size: 3 }, output: { "Beginner All-Mountain": 1 } },
    { input: { skillLevel: 3, skiPreference: 4, turnPreference: 3, size: 3 }, output: { "Intermediate All-Mountain": 1 } },
    { input: { skillLevel: 3, skiPreference: 1, turnPreference: 1, size: 3 }, output: { "Park Ski": 1 } },
    { input: { skillLevel: 3, skiPreference: 1, turnPreference: 3, size: 3 }, output: { "Park Ski": 1 } },
    { input: { skillLevel: 3, skiPreference: 1, turnPreference: 5, size: 3 }, output: { "Park Ski": 1 } },
    { input: { skillLevel: 3, skiPreference: 2, turnPreference: 3, size: 3 }, output: { "Intermediate Powder Ski": 1 } },
    { input: { skillLevel: 5, skiPreference: 2, turnPreference: 3, size: 3 }, output: { "Advanced Powder Ski": 1 } },
    { input: { skillLevel: 3, skiPreference: 3, turnPreference: 5, size: 3 }, output: { "Ski for long turns on resort": 1 } },
    { input: { skillLevel: 3, skiPreference: 5, turnPreference: 1, size: 3 }, output: { "Touring Ski": 1 } },
    { input: { skillLevel: 3, skiPreference: 5, turnPreference: 3, size: 3 }, output: { "Touring Ski": 1 } },
    { input: { skillLevel: 3, skiPreference: 5, turnPreference: 5, size: 3 }, output: { "Touring Ski": 1 } },
];

module.exports = trainingData;