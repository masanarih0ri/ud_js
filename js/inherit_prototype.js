function Person(first, last) {
  this.first = first;
  this.last = last;
}

// Personを継承したJapaneseというコンストラクタ関数を作る
function Japanese(first, last) {
  // callで明示的にPersonのthisとJapaneseのthisを合わせる
  // この設定によりJapaneseをインスタンス化した時にPersonの変数も合わせて初期化することができる
  Person.call(this, first, last);
  this.lang = 'ja';
}


Person.prototype.introduce = function() {
  console.log(`my name is ${this.first} ${this.last}`);
}

// この記述でPersonに設定したprototypeをJapaneseに継承することができる （me.introduceが使えるようになる）
Object.setPrototypeOf(Japanese.prototype, Person.prototype);


// この書き方だとJapaneseに対して新しくintroduceが定義されるのでこれが優先される
Japanese.prototype.introduce = function() {
  console.log(`こんにちは ${this.first} ${this.last}`);
}

let me = new Japanese('masanari', 'hori');
me.introduce();

