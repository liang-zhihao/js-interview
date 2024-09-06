// 这里返回的函数是每次用户实际调用的防抖函数
// 如果已经设定过定时器了就清空上一次的定时器
// 开始一个新的定时器，延迟执行用户传入的方法
function debounce(func, wait = 50) {
  let timer = null; // Change `const` to `let` to allow reassignment
  return function (...args) {
    if (timer) {
      clearTimeout(timer); // Clear the existing timer when the function is called again
    }
    timer = setTimeout(() => {
      func.apply(this, args); // Use `apply` to call `func` with the correct context and arguments
    }, wait); // Include the `wait` delay in the `setTimeout` function
  };
}

function debounce2(func, wait = 50) {
  let timer = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
