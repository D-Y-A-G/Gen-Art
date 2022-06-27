/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas2");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drawing = false;
ctx.lineWidth = 0.5;

