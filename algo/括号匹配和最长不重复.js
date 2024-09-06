// 123(12{321}adf]as3)
function test(s) {
  const stack = [];
  const matchingPairs = { ")": "(", "}": "{", "]": "[" };

  for (const c of s) {
    if (matchingPairs[c]) {
      if (stack.pop() !== matchingPairs[c]) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
}

// console.log(test("123(12{321}adf]as3)"));

// aaaabfdesfsdflljioqwerxsfffsdfxczxczcdsf =>ljioqwerxsf
function test2(s) {
  let l = 0,
    max = 0,
    start = 0;
  const set = new Set();
  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l++]);
    }
    set.add(s[r]);
    if (r - l + 1 > max) {
      max = r - l + 1;
      start = l;
    }
  }
  return s.slice(start, start + max);
}
console.log(test2("aaaabfdesfsdflljioqwerxsfffsdfxczxczcdsf"));
