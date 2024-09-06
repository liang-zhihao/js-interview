// 生成SKU
// 已知规格数据
const spu = "AB1234567";
const specList = [
  ["red", "yellow"],
  ["XL", "S"],
  ["a1", "a2"],
  ["b1", "b2"],
];

 
function createSKU() {
  const res = [];
  backtrack(0, spu);
  return res;

  function backtrack(level, cur) {
    if (level === specList.length) {
      res.push(cur);
      return;
    }
    for (let i = 0; i < specList[level].length; i++) {
      backtrack(level + 1, cur + "-" + specList[level][i]);
    }
  }
}

console.log(createSKU());
