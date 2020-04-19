// コンストラクタ関数はオブジェクトを大量に作ったりする際に使う型のようなもの
let person = {
  first: 'first',
  last: 'last'
}

// コンストラクタ関数
// 先頭を大文字にする
// ここに定義はされていないが、prototypeというプロパティもある
function Person(first, last) {
  this.first = first;
  this.last = last;
  // this.introduce = function() {
  //   console.log(`my name is ${first} ${last}`)
  // }
}

Person.prototype.introduce = function() {
  // thisはPersonを指している
  console.log(`my name is ${this.first} ${this.last}`)
}


let me = new Person('masanari', 'hori');
// let me2 = new Person('hoge', 'fuga');

// me.introduce = function() {
//   console.log(`hello, ${this.first}`);
// }

// newは何をしているか？
// まず空のオブジェクトを作っている
// thisで指されているプロパティが入ってくる（この場合はfirst last）
// __proto__プロパティにPerson.prototypeの中身を参照する
// new演算子でコンストラクタ関数からオブジェクトを作ることを「インスタンス化」という


//　このように書くのは__proto__の中に
// me.__proto__.introduce = function() {
//   console.log('nono');
// }
// let me = new Person('masanari', 'hori');
// let me2 = new Person('me2', 'desu')
// console.log(me.first);
// me.introduce();
// me.introduce = function() {
//   console.log('no');
// }
me.introduce();
// me2.introduce();
