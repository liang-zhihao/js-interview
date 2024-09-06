class MyPromise {
  constructor(fn) {
    this.state = "PENDING";
    this.value = "";
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];
    fn(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(value) {
    if (this.state === "PENDING") {
      this.state = "RESOLVED";
      this.value = value;
      this.resolvedCallbacks.forEach((cb) => cb(value));
    }
  }
  reject(value) {
    if (this.state === "PENDING") {
      this.state = "REJECTED";
      this.value = value;
      this.rejectedCallbacks.forEach((cb) => cb(value));
    }
  }
  then(onFulfilled, onRejected) {
    if (this.state === "PENDING") {
      this.resolvedCallbacks.push(onFulfilled);
      this.rejectedCallbacks.push(onRejected);
    }
    if (this.state === "RESOLVED") {
      onFulfilled(this.value);
    }
    if (this.state === "REJECTED") {
      onRejected(this.value);
    }
  }
}
const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong!");
  }, 1000);
});

myPromise.then(null, (error) => {
  console.log("Callback 1:", error);
});

myPromise.then(null, (error) => {
  console.log("Callback 2:", error);
});
