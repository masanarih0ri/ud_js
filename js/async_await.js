function wait(num) {
  return new Promise((resolve, reject) =>  {
    setTimeout(() => {
      console.log(num);
      if(num === 2) {
        reject(num);
      } else {
        resolve(num);
      }
    }, 1000)
  })
}

// asyncを使うことで非同期処理になる
// waitを呼ぶ関数をinitとする
async function init() {
  let num = 0;
  try {
    // waitはsetTimeoutを使っているので非同期処理
    // awaitで受けることができるのは非同期処理をPromiseである
    // awaitで受けるとPromiseでラップされた値を実行結果として受け取ることができる
    num = await wait(num);
    num++;
    num = await wait(num);
    num++;
    num = await wait(num);
  } catch(e) {
    throw new Error('Error is Occured');
  }
  return num;
}

console.log(init())

init();