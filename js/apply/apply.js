Function.prototype.myCall = function (context = globalThis, args) {
  if (typeof context !== "object") {
    context = new Object(context);
  }
  const key = Symbol();
  context[key] = this;
  const res = context[key](...args);
  delete context[key];
  return res;
};
