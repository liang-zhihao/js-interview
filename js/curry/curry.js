function curry(func) {
  const funcArgsLen = func.length; // Get the number of parameters expected by the function
  const args = []; // Array to hold accumulated arguments
  function calc(...newArgs) {
    args.push(...newArgs); // Flatten and push new arguments into the args array
    if (args.length >= funcArgsLen) {
      // Check if the accumulated arguments meet the function's arity
      return func.apply(this, args.slice(0, funcArgsLen)); // Apply the function when sufficient arguments have been provided
    } else {
      return calc; // Return calc to gather more arguments
    }
  }
  return calc; // Initial return of the calc function to start accumulating arguments
}

const l = [];
l.push(1, 2);
console.log(l);

const curry2 = (func) => {
  const argLen = func.length;
  return function calc(...args) {
    return args.length >= argLen
      ? func.apply(this, args.slice(0, argLen))
      : (...moreArgs) => calc(...args, ...moreArgs);
  };
};
