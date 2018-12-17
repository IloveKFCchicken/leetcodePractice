/**
 *
 * 7. 整数反转
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0 || x > (Math.pow(2, 31) - 1) || x < (-Math.pow(2, 31)))return 0;

  var state = x > 0
  var temp = x.toString()
  var list = temp.split('')
  var newlist = list.reverse()
  var res = newlist.join('')
  return state ? parseInt(res) : -parseInt(res)
};


console.log(reverse(0))
console.log(reverse(9646324351))
console.log(reverse(123))
console.log(reverse(-122))
console.log(reverse(100))
console.log(reverse(94637))