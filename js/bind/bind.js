Function.prototype.myBind = function (context = globalThis, ...args) {
  let self = this; // Save reference to the original function

  const fBound = function (...innerArgs) {
    // If the bound function is called with `new`, `this` should refer to the new instance.
    // Otherwise, `this` should refer to the provided `context`.
    return self.apply(
      this instanceof fBound ? this : context,
      args.concat(innerArgs)
    );
  };

  // Ensure the prototype chain is correctly set up.
  fBound.prototype = Object.create(this.prototype);
  fBound.prototype.constructor = fBound; // Ensure correct constructor property

  return fBound;
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};
const o = {
  name: 1,
  age: 2,
};
const personCreator = Person.myBind(o, "Alice");
const personInstance = new personCreator(30);

console.log(personInstance.greet()); // Output: "Hello, my name is Alice and I am 30 years old."
