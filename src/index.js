/**
 *
 * 7. 整数反转
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var MAX = Math.pow(2, 31) - 1
  var MIN = -Math.pow(2, 31)
  if (x === 0) return 0;

  var state = x > 0
  var temp = x.toString()
  var list = temp.split('')
  var newlist = list.reverse()
  var res = state ? parseInt(newlist.join('')) : -1 * parseInt(newlist.join(''))
  if (res > MAX || res < MIN) return 0;
  return res
};

// console.log(reverse(9646324351))
// console.log(reverse(-1234566789))
// console.log(reverse(123))
// console.log(reverse(-122))
// console.log(reverse(100))
// console.log(reverse(94637))
// console.log(reverse(0))


/**
 *
 * 190. 颠倒二进制位
 *
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  var temp = n.toString(2)
  if (temp.length < 32) {
    while (temp.length < 32) {
      temp = '0' + temp
    }
  }

  var list = temp.split('')
  var newlist = list.reverse()
  var res = newlist.join('')
  return parseInt(res, 2)
};

// console.log(reverseBits(0b00000010100101000001111010011100))


/**
 *
 * 191. 位1的个数（也被称为汉明重量）
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  var temp = n.toString(2)
  var list = temp.split('')
  let i = 0;
  let num = 0;
  while (i < list.length) {
    if (list[i] == 1) num++;
    i++
  }
  return num
};



// console.log(hammingWeight(0b00000010100101000001111010011100))




/**
 *
 * 338. 比特位计数
 *
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  var index = 0
  var list = []
  while (index <= num) {
    if (index > 0) {
      var tempStr = index.toString(2) + ''
      var stempStrList = tempStr.split('')
      var size = 0
      stempStrList.map(function (item) {
        if (item === '1') size++
      })
      list.push(size)
    } else {
      list.push(index)
    }
    index++
  }
  return list
};

// console.log(countBits(2))


/**
 *
 * 82. 删除排序链表中的重复元素 II
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var link_list = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 4,
        next: {
          val: 3,
          next: {
            val: 4,
            next: null
          }
        }
      }
    }
  }
}
var link_list2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 2,
        next: null
      }
    }
  }
}

var deleteDuplicates = function (head) {
  if(!head) return null
  var tempList = []
  var removeData = {}

  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  function dealNode(node) {
    if(!node)return null

    var item = new ListNode(node.val)
    if (tempList.length === 0) {
      if(node.hasOwnProperty('val') && !removeData[node.val.toString()]){
        tempList.push(item)
        // console.log('push',tempList)
      }
    } else {
      var hasSame = false
      var deleteIndex = -1

      if(!removeData[node.val.toString()]) {
        tempList.map((item, i) => {
          // console.log('map',item.val,node.val.toString())
          if (item.val == node.val ) {
            hasSame = true
            deleteIndex = i
            removeData[node.val] = true
            tempList.splice(deleteIndex, 1)
          }
        })

      }else{
        hasSame = true
      }


      if (!hasSame) {
        tempList.push(item)
        // console.log('push',tempList)
      }
    }
    if (node.next) dealNode(node.next)
  }
  dealNode(head)

  // console.log(tempList)
  var len = tempList.length;
  while (len > 0) {
    len--
    if(tempList[len] && tempList[len - 1]){
      tempList[len - 1].next = tempList[len]
    }
  }
  return tempList[0] ? tempList[0] : null
};

console.log(deleteDuplicates(link_list))
console.log(deleteDuplicates(link_list2))
console.log(deleteDuplicates({}))