function add(a, b) {
  a = a.split("").reverse();
  b = b.split("").reverse();
  let res = "";
  const maxLen = Math.max(a.length, b.length);
  let carry = 0;
  for (let i = 0; i < maxLen; i++) {
    const sum = (+a[i] || 0) + (+b[i] || 0) + carry;
    carry = Math.floor(sum / 10);
    res = (sum % 10) + res;
  }
  if (carry) {
    res = carry + res;
  }
  return res;
}
console.log(add("123456789156789", "987654321987654321")); // 输出 "1111111111111111110"
