module.exports = function reverse (n) {
  let newArr = String(Math.abs(n));
  let result = newArr.split('').reverse().join('');


  return result;
}
