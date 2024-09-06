function _new(constructor, ...args) {
  const newObj = Object.create(constructor.prototype);
  const res = proto.apply(newObj, args);
  return typeof res === "object" ? res : newObj;
}
