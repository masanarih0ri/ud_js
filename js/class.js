class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  introduce() {
    console.log(`my name is ${this.first} ${this.last}`);
  }
}

class Japanese extends Person {
  constructor(first, last) {
    // Personのコンストラクタを呼ぶ。prototypeも継承される
    super(first, last);
    this.lang ='ja';
    // private変数であることを明示する
    this._age = 0;
  }

  introduce() {
    console.log(`こんにちは ${this.first} ${this.last}`)
  }

  // static演算子を使うと、コンストラクタ関数から直接呼び出せるようになる
  static sayHello() {
    console.log('はろー');
  }

  // setでthis._ageに対してvalueをセットする（デフォルト値は0）
  set age(value) {
    this._age = value;
  }

  // getはthis._ageを返す
  get age() {
    return this._age;
  }
}

let me = new Person('masanari', 'hori');
me.introduce();

let japanese = new Japanese('マサナリ', 'ホリ');
japanese.introduce();
console.log(japanese.age);
japanese.age = 10;
console.log(japanese.age);
