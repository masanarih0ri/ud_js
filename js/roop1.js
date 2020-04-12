const data = [1,2,3,4,5];
const fruits = {
  banana: 'バナナ',
  apple: 'りんご',
  orange: 'オレンジ'
}

Object.prototype.additionaiFn = function(){};

let keyFruits = Object.entries(fruits);
console.log(keyFruits);
for (let [k, v] of keyFruits) {
  console.log(k, v);
}