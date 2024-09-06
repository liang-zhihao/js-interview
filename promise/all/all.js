Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    const res = new Array(promises.length); // Pre-allocate the array
    let completed = 0;

    if (promises.length === 0) {
      resolve(res);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          res[index] = value;
          completed += 1;
          if (completed === promises.length) {
            resolve(res);
          }
        })
        .catch(reject); // Reject the entire Promise.all if any promise rejects
    });
  });
};

Promise.all2 = function (promises) {
  return new Promise((resolve, reject) => {
    const len = promises.length;
    let completed = 0;
    const result = [];
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i])
        .then((r) => {
          completed += 1;
          result[i] = r;
          if (len === completed) {
            resolve(result);
          }
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
};
