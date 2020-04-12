// let [a,b, ...rest] = [1,2,3,4,5];

const {b, a, ...rest} = {a:10, b:20, c:30, d:40};

console.log(a);
console.log(b);
console.log(rest);

// 変数名を変えたいとき

const {A:aa, B:bb, ...REST} = {A:10, B:20, C:30, D:40};
console.log(aa);
console.log(bb);
console.log(REST);

// 関数の引数として使うと良いというケース
// drawES2015Chartは引数にオブジェクトが入ってくるが、初期値は{}（空のオブジェクト）
function drawES2015Chart({size = 'big', coords = {x:0, y:0}, radius = 25} = {}) {
  console.log(size, coords, radius);
}

let withoutArgs = drawES2015Chart();
// この場合はoutputはbig {x:0, y:0} 25となる

let withArgs = drawES2015Chart({
  size: 'small',
  radius: 24
})
// この場合はoutputはsmall {x:0, y:0} 24となる

console.log(withoutArgs);
console.log(withArgs)