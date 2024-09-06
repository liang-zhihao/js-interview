Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((r) => {
          resolve(r);
          return;
        })
        .catch((e) => {
          reject(e);
          return;
        });
    }
  });
};
