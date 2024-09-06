class Subject {
  constructor() {
    this.observers = [];
  }
  add(observer) {
    this.observers.push(observer);
  }
  remove(observer) {
    this.observers = this.observers.filter((i) => i !== observer);
  }
  notify() {
    for (const element of this.observers) {
      element.update();
    }
  }
}
class Observer {
    constructor(name) {
        this.name=name
    }
    update(){
        console.log("")
    }
}
