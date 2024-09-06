const deepClone = (target) => {
  if (target === null || typeof target !== "object") {
    return target;
  }
  if (Array.isArray(target)) {
    return target.map(deepClone);
  }
  const cloneTarget = {};
  const keys = Object.keys(target);
  for (let i = 0; i < keys.length; i++) {
    const prop = keys[i];
    cloneTarget[prop] = deepClone(target[prop]);
  }
  return cloneTarget;
};

 