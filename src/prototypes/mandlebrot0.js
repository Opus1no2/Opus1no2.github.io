import './styles/index.scss';

const min_real = -2.5
const max_real = 1;

const min_imagine = -1;
const max_imagine = 1;
const width = window.innerWidth;
const height = window.innerHeight;

const canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');

function mandlebrot(realX, imagineY) {
    let y = 0;
    let x = 0;
    let iteration = 0;
    const max_iteration = 1000;

    while (((x * x) + (y * y)) <= 4 && iteration < max_iteration) {
        const temp = x * x - y * y + realX;
        y = 2 * x * y + imagineY;
        x = temp;
        iteration++;
    }
    return iteration;
}

function mapToReal(x, width, min_real, max_real) {
    const range = max_real - min_real;
    return x * (range / width) + min_real;
}

function mapToImagine(y, height, min_imagine, max_imagine) {
    const range = max_imagine - min_imagine;
    return y * (range / height) + min_imagine;
}

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        const realX = mapToReal(x, width, min_real, max_real);
        const imagineY = mapToImagine(y, height, min_imagine, max_imagine);

        const score = mandlebrot(realX, imagineY);

        const r = (score % 250);
        const g = (score % 200);
        const b = (score % 256);

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, y, 1, 1);
    }
}