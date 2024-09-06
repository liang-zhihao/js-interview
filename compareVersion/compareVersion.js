// 在比较函数中，我们首先将版本号字符串分割成由数字组成的数组。然后，我们在两个数组之间进行迭代，比较每一个相应的数字，直到找到一个差异，或者遍历完最长的版本号。

function compareVersions(v1, v2) {
  const p1 = v1.split(".").map(Number);
  const p2 = v2.split(".").map(Number);

  for (let i = 0; i < Math.max(p1.length, p2.length); i++) {
    const t1 = p1[i] || 0;

    const t2 = p2[i] || 0;

    if (t1 > t2) {
      return 1;
    }
    if (t1 < t2) {
      return -1;
    }
  }
}
const versions = ["0.1.1", "2.3.3", "0.302.1", "4.2", "4.3.5", "4.3.4.5"];

// 使用自定义比较函数进行排序
versions.sort(compareVersions);

console.log(versions);
