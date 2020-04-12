// 非同期処理を行う関数がexecute_callback
function execute_callback(callback, num) {
  setTimeout(() => {
    console.log(num);
    callback();
  }, 1000)
}

execute_callback(() =>  {
  console.log('this is callback');
}, 100)