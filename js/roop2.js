const data = [3,1,2,4,5];
const fruits = {
  banana: 'バナナ',
  apple: 'りんご',
  orange: 'オレンジ'
}

// data.forEach((value, index, array) =>  {
//   console.log(value, index, array);
// })

// const newData = data.map((value, index, array) => {
//   return value * 2;
// })

// console.log(newData);

// const newData = data.filter((value, index, array) => {
//   return value !== 1;
// })

// console.log(newData);

// const newData = data.reduce((acc, cur) => {
//   console.log(acc, cur)
//   return acc + cur;
// }, 0)

// console.log(newData);

// const newData = data.sort((a, b) => {
//   return b - a;
// })

// console.log(newData);

const newData = data.map(v =>  {
  return v + 1;
})
.sort((a, b) => {
  return a - b;
})

console.log(newData);