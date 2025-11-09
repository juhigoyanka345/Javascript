const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const statusDiv = document.querySelector('.status');

let intervalId;
let currentState = 'stopped';

// Timings in milliseconds (adjust as needed)
const timings = {
    red: 5000,    // 5 seconds
    green: 5000,  // 5 seconds
    yellow: 2000  // 2 seconds
};

// Function to set active light
function setActiveLight(color) {
    [redLight, yellowLight, greenLight].forEach(light => light.classList.remove('active'));
    document.getElementById(color).classList.add('active');
    statusDiv.textContent = `Status: ${color.charAt(0).toUpperCase() + color.slice(1)}`;
}

// Simulation cycle
function startCycle() {
    setActiveLight('red');
    setTimeout(() => {
        setActiveLight('green');
        setTimeout(() => {
            setActiveLight('yellow');
            setTimeout(() => {
                if (currentState === 'running') startCycle();
            }, timings.yellow);
        }, timings.green);
    }, timings.red);
}

// Start simulation
startBtn.addEventListener('click', () => {
    if (currentState === 'stopped') {
        currentState = 'running';
        startBtn.disabled = true;
        stopBtn.disabled = false;
        startCycle();
    }
});

// Stop simulation
stopBtn.addEventListener('click', () => {
    currentState = 'stopped';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    statusDiv.textContent = 'Status: Stopped';
    [redLight, yellowLight, greenLight].forEach(light => light.classList.remove('active'));
});