function timer(step, update, draw) {
  let prev = 0, acc = 0;
  return function onFrame(time = 0) {
    acc = acc + (time - prev) / 1000;
    while (acc > step) {
      update(step);
      acc = acc - step;
    }
    draw();
    prev = time;
    requestAnimationFrame(onFrame);
  }
}

module.exports = timer;
