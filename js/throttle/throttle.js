function throttle(func, wait) {
  let lastTime = 0; // Changed from `const` to `let` to allow reassignment

  return function (...args) {
    const now = Date.now(); // Gets the current timestamp
    if (now - lastTime >= wait) {
      // Checks if the wait time has elapsed
      lastTime = now; // Updates lastTime to the current time
      func.apply(this, args); // Executes the function with the correct context and parameters
    }
  };
}

function throttle2(func, wait) {
  let lasttime = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lasttime >= wait) {
      lasttime = now;
      func.apply(this, args);
    }
  };
}
