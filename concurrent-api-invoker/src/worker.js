const { parentPort, workerData } = require('worker_threads');
const axios = require('axios');

async function sendPostRequest(apiUrl, payload) {
    try {
        const response = await axios.post(apiUrl, payload);
        parentPort.postMessage({ status: 'success', data: response.data });
    } catch (error) {
        parentPort.postMessage({ status: 'error', error: error.message });
    }
}

sendPostRequest(workerData.apiUrl, workerData.payload);
