// let name = 'masanari';
// let str = `hello \n ${name}`;

// console.log(str);

function b(strings, ...values) {
  console.log(strings);
  console.log(values);
  return strings.reduce((acc, str, i) => {
    let val = values[i] ? `<b>${values[i]}</b>` : "";
    // console.log(`${acc}${str}${val}`);
    return `${acc}${str}${val}`;
  }, "");
}

// タグ付き関数の中ではstringsの方...valuesよりも1つ多くなる

const str1 = 'bob';
const str2 = 'tom';
const result = b`${str1} and ${str2}bbb`;

console.log(result);
