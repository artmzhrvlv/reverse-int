module.exports = function reverse (n) {
    var result, num = 0;
  while (n) {
    num = n % 10
    result = (result * 10) + num;
    n = Math.floor(n / 10);
  }

  return result;
  
}