const sleep = (timeout = 1000) => {
  return new Promise((resolve, reject) => {
    return setTimeout(resolve, timeout);
  });
};
const sleep2 = (timeout = 1000) => new Promise(resolve => setTimeout(resolve, timeout));

sleep(5000).then(() => {
  console.log("1");
});
