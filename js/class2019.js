document.addEventListener('DOMContentLoaded', () => {
  const es = new ES2019();
  es.printVersion();
});

class ES2019 {
  // constructorを省略しても良い
  // _version = 2019;
  // private変数の設定は#を使う
  #version = 2019;
  // printVersion() {
  //   console.log(this.#version);
  // }
  // プライベートメソッドも#で定義できる
  #increment() {
    this.#version++;
  }

  printVersion() {
    this.#increment();
    console.log(this.#version);
  }
}
