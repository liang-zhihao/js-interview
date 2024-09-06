function test(s) {
  const postArr = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    postArr.push(s.slice(n - i - 1));
  }
}
function sort2(postArr) {
  for (let i = 0; i < postArr.length - 1; i++) {
    for (let j = 0; j < postArr.length - i - 1; j++) {
      if (cmp(postArr[j], postArr[j + 1]) > 0) {
        [postArr[j], [postArr[j + 1]]] = [postArr[j + 1], [postArr[j]]];
      }
    }
  }
  return postArr;
}
function cmp(s1, s2) {
  const len = Math.min(s1.length, s2.length);
  for (let i = 0; i < len; i++) {
    if (s1.charCodeAt(i) - s2.charCodeAt(i) > 0) {
      return 1;
    } else if (s1.charCodeAt(i) - s2.charCodeAt(i) < 0) {
      return -1;
    }
  }
  return 0;
}
console.log(sort2(["abcdeabc", "bcdeabc", "cdeabc", "deabc", "eabc", "abc"]));
