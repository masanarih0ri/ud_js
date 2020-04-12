let a = [[1],[2],[3]];
let b = [...a];

let res = b.shift().shift();

console.log(res);
console.log(b);
console.log(a);
// shift()は配列の最初の要素を取り除き、その値を返す。
// 上記の場合は1回目のshiftで[1]を取り出し、次で1を取り出す

function sum(...theArgs) {
  return theArgs.reduce((prev, current) => {
    return prev + current;
  });
}

console.log(sum(1,2,3));

function f(a, ...args) {
  console.log(args);
}

console.log(f(1,2,3,4,5));