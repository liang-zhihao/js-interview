// Define a few example tasks
const tasks = [
  () => new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  () => new Promise((resolve) => setTimeout(() => resolve(2), 500)),
  () => new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(4), 1500)),
];
async function limit2(tasks, limit = 2) {
    const existing=new Set()
}
limit2(tasks, 2).then((r) => {
  console.log(r);
});
async function limitConcurrency(tasks, maxConcurrent) {
  const executing = new Set();
  for (const task of tasks) {
      const p = Promise.resolve(task()).then(result => {
          executing.delete(p);
          return result;
      });
      executing.add(p);
      if (executing.size >= maxConcurrent) {
          await Promise.race(executing);
      }
  }

  return Promise.all([...executing]);
}

// Example usage
const tasks2 = [
  () => new Promise(resolve => setTimeout(() => resolve('Task 1 done'), 1000)),
  () => new Promise(resolve => setTimeout(() => resolve('Task 2 done'), 500)),
  () => 'Immediate Task',
  () => console.log("Task 4: Immediate Function Executed")
];

// limitConcurrency(tasks, 2).then(console.log);

let r=[]
r[10]="1"
console.log(r.filter((i)=>i===undefined))