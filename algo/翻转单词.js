// 输入：s = "a good example "
// 输出："example good a"
// 解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
function test(arr) {
  const arr = arr.split(" ").filter((item) => {
    return item !== "";
  });
  return arr.reverse().join(" ");
}
