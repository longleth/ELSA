const { Worker } = require('worker_threads');
const { apiUrl, quizId, userIds, questionIds, answers, concurrency } = require('./config');

// Utility to pick a random item from an array
function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Build a randomized payload conforming to schema
function generateRandomPayload() {
    return {
        userId: pickRandom(userIds),
        quizId: quizId,
        questionId: pickRandom(questionIds),
        answer: pickRandom(answers)
    };
}

function runWorker(apiUrl, payload) {
    return new Promise((resolve) => {
        const worker = new Worker(__dirname + '/worker.js', {
            workerData: { apiUrl, payload }
        });

        worker.on('message', (msg) => resolve(msg));
        worker.on('error', (err) => resolve({ status: 'error', error: err.message }));
        worker.on('exit', (code) => {
            if (code !== 0) {
                console.error(`Worker exited with code ${code}`);
            }
        });
    });
}

(async () => {
    const workers = [];

    for (let i = 0; i < concurrency; i++) {
        const payload = generateRandomPayload();
        console.log(`Dispatching with payload:`, payload);
        workers.push(runWorker(apiUrl, payload));
    }

    const results = await Promise.all(workers);
    console.log('\nAll Results:', results);
})();
