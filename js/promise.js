// 非同期処理を行う関数がexecute_callback
// function execute_prmise_func(num) {
//   return new Promise((resolve, reject) =>  {
//     setTimeout(() => {
//       console.log(num);
//       resolve(num);
//     }, num)
//   })
// }

// thenはexecute_prmise_funcが終わった後の処理をかく場所
// resolveで引数に渡したものがthenメソッド中での関数の引数になる
// 直列的な処理の場合
// execute_prmise_func(0).then(num => {
//   num++;
//   return execute_prmise_func(num); //ここのreturn の後ろで関数を実行しない場合はPromiseチェーンが切れてしまう。
// }).then(num => {
//   num++;
//   return execute_prmise_func(num);
// }).then(num => {
//   num++;
//   return execute_prmise_func(num);
// }).then(num => {
//   num++;
//   return execute_prmise_func(num);
// }).then(num => {
//   num++;
//   return execute_prmise_func(num);
// })

// 複数の処理が終わったら他の処理を進めるパターン

// 非同期処理を行う関数がexecute_callback
function execute_prmise_func(num) {
  return new Promise((resolve, reject) =>  {
    setTimeout(() => {
      console.log(num);
      if(num === 2) {
        reject(num);
      } else {
        resolve(num);
      }
    }, num)
  })
}

Promise.all([execute_prmise_func(1000), execute_prmise_func(1500), execute_prmise_func(2000)]).then(nums => {
  // このthenメソッドの引数はnumではなくてnumsとなる。それぞれのPromiseのresolveの配列が返ってくる
  console.log(nums);
})