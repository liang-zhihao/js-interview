const quickSort = (arr) =>
  arr.length <= 1
    ? arr
    : [
        ...quickSort(arr.filter((x) => x < arr[0])), // 递归排序小于基准的元素
        ...arr.filter((x) => x === arr[0]), // 保留等于基准的元素
        ...quickSort(arr.filter((x) => x > arr[0])), // 递归排序大于基准的元素
      ];

console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));

/**
 * 
 * 
 * 基础条件 (arr.length <= 1)：

如果数组长度为 1 或 0，直接返回数组，因为它已经有序。
分区：

选择数组的第一个元素 arr[0] 作为基准（pivot）。
使用 filter 方法将数组分为两部分：
小于基准的元素放在左侧子数组。
大于基准的元素放在右侧子数组。
递归排序：

对左侧和右侧子数组分别递归调用 quickSort。
合并：

将左侧子数组、基准元素、右侧子数组合并为一个新数组。
 * 
 */
