/*
クロージャーの定義
クロージャーは、関数とその関数が宣言されたレキシカルスコープの組み合わせ
戻り値の関数がレキシカルスコープを持っているものがクロージャー
let counter = 0;
return function() {
  counter++;
}
*/ 

// let counter = 0;

// increment();
// increment();
// increment();

// function increment() {
//   counter ++;
//   console.log(counter);
// }

let increment = (function() {
  let counter = 0; //レキシカルスコープ

  return function() {
    counter++;
    console.log(counter);
  }
})();

increment();
increment();
increment();


// 即時関数で囲む
// incrementが評価された時点で右辺が計算される
// これでcounterを外部から上書きできない
// increment.counter = 10; としても別のメモリを参照しに行っている


// 別の例
function addStringFactory(tail) {
  return function(str) {
    return str + tail;
  };
}

// ここでaddAsとaddBsという関数を作る
let addAs = addStringFactory('AAAAAA');
let addBs = addStringFactory('BBBBBB');

let str = 'hoge';
console.log(addAs(str));