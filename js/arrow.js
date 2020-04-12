const timesTwo =  i =>  i * 2

const res = timesTwo(2);
// console.log(res);


let normalFn = {
  id: 43,
  counter: function() {
    console.log(this.id);
    setTimeout(() => {
      console.log(this.id);
    }, 1000)
  }
}

normalFn.counter();

window.me = 'global';

const outer = function() {
  let me = 'outer';
  return {
    me: 'inner',
    say: () => {
      console.log(this.me);
    }
  }
}

outer().say();

// outputはglobal