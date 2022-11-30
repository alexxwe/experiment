const maxTrace = 100;
let traceIndex = 0;
const moveThreshold = 10;
const maxSpeed = 5000;
const maxSize = 32;
const maxColor = 16777215;
let x = 0;
let y = 0;
let diffX = 0;
let diffY = 0;

window.addEventListener("mousemove", (e) => {
  diffX = Math.abs(x - e.offsetX);
  diffY = Math.abs(y - e.offsetY);
  if (diffX >= moveThreshold || diffY >= moveThreshold) {
    spawnTrace(e);
  }

  x = e.offsetX;
  y = e.offsetY;
});

function spawnTrace(e) {
  if (traceIndex >= maxTrace) return;
  traceIndex++;
  const trace = document.createElement("div");

  let size = Math.floor(Math.random() * maxSize + 1) + "px";
  let speed = Math.floor(Math.random() * maxSpeed + 1);
  let color = "#" + Math.floor(Math.random() * maxColor).toString(16);
  trace.classList.add("trace");
  trace.style.backgroundColor = color;
  trace.style.left = e.pageX + "px";
  trace.style.top = e.pageY + "px";
  trace.style.width = size;
  trace.style.animation = "trace " + speed + "ms linear forwards";
  setTimeout(function () {
    trace.remove();
    traceIndex--;
  }, speed);

  document.body.appendChild(trace);
}
