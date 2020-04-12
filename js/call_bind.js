function greet() {
  console.log(arguments);
  let slicedArray = [].slice.call(arguments, 0, 2);
  let hi = `Hi, ${this.name}`
  console.log(slicedArray);
}

let obj = { name: 'tom' }

greet.call(obj, 1,2,3,4);
// callは第一引数内にthisのオブジェクトを決定する
// 第二引数は関数の引数が定義できる

const sample_array = [1,2,3,4];
console.log(Math.min(...sample_array));
// applyを使う場合
console.log(Math.min.apply(null, sample_array));

// bind

// let myObj = {
//   id: 42,
//   print() {
//     console.log(this)
//     setTimeout(function() {
//       console.log(this)
//       console.log(this.id);
//     }.bind(this), 1000)
//   }
// }

// myObj.print();

// アロー関数の場合は関数の外のthisはsetTimeoutの中のものと同じ

let myObj = {
  id: 42,
  print() {
    console.log(this)
    setTimeout(() => {
      console.log(this)
      console.log(this.id);
    }, 1000)
  }
}

myObj.print();