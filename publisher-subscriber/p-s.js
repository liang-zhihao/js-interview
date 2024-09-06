// 创建一个对象(缓存列表)
// on方法用来把回调函数fn都加到缓存列表中
// emit 根据key值去执行对应缓存列表中的函数
// off方法可以根据key值取消订阅
class EventEmitter {
  constructor() {
    this._events = {};
  }

  on(eventName, fn) {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }
    this._events[eventName].push(fn);
  }
  // Emit an event with given arguments
  emit(eventName, ...args) {
    if (this._events[eventName]) {
      this._events[eventName].forEach((fn) => {
        fn.apply(this, args);
      });
    }
  }
  off(eventName, cb) {
    if (this._events[eventName]) {
      this._events[eventName] = this._events[eventName].filter((fn) => {
        return cb !== fn;
      });
    }
  }
}
let event = new EventEmitter();

let login1 = function (...args) {
  console.log("login success1", args);
};
let login2 = function (...args) {
  console.log("login success2", args);
};
event.on('login',login1)
event.emit("login", 1, 2, 3, 4, 5);
event.emit("login", 6, 7, 8, 9);
event.emit("login", 10, 11, 12);
event.off("login", login1); // 解除订阅
event.on('login',login2)
event.emit("login", 10, 11, 12);
