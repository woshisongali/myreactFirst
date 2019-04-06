var fullJustify = function(words, maxWidth) {
    let seet = []
    let rowWords = []
    let strlen = 0

    function clone (arr) {
      let newArr = []
      for (let i = 0, len = arr.length; i < len; i++) {
        newArr[i] = arr[i]
      }
      return newArr
    }
    function createSpan (num) {
      if (num == 0) {
        return ''
      }
      let str = ''
      for (let i = 0; i < num; i ++) {
        str += ' '
      }
      return str
    }
    function division (arr, width, isLast) {
      let newArr = clone(arr)
      let sublen = 0
      let newstr = ''
      newArr.forEach(element => {
        sublen += element.length
      });
      let space = newArr.length === 1 ? (width - sublen)
       : Math.floor((width - sublen) / (newArr.length - 1))
      let extraIndex = (width - sublen) - parseInt(space * (newArr.length - 1))
      if (newArr.length == 1) {
        newstr = newArr[0] + createSpan(space)
      } else {
        if (isLast) {
          newArr.forEach((value, index) => {
            if (index === (newArr.length - 1)) {
              newstr += value
              newstr += createSpan(width - sublen - index)
            } else {
              newstr += value + createSpan(1)
            } 
          });
        } else {
          newArr.forEach((value, index) => {
            if (index === (newArr.length - 1)) {
              newstr += value
            } else {
              newstr += value + createSpan(space)
              if (index < extraIndex) {
                newstr += ' '
              }
            }
            
          });
        }
        
      }
      // console.log(newstr)
      seet.push(newstr)
      // console.log(extraIndex)
      // console.log('the extra is ' + extraIndex)
    }

    for (let i = 0, len = words.length; i < len; i++) {
      if (rowWords.length !== 0) {
        strlen += 1
      } else {
        strlen = 0
      }
      let item = words[i]
      rowWords.push(item)
      strlen += item.length
      if (strlen > maxWidth) {
        rowWords.pop()
        strlen = 0
        i = i -1
        division(rowWords, maxWidth)
        rowWords = []
      }
    }

    if (rowWords.length > 0) {
      division(rowWords, maxWidth, true)
    }
    // console.log(seet)
    return seet
};
// let words = ["This", "is", "an", "example", "of", "text", "justification."]
// let maxWidth = 16
// let seet = fullJustify(words, maxWidth)
// console.log(seet)
// let words2 = ["What","must","be","acknowledgment","shall","be"]
// let seet2 = fullJustify(words2, maxWidth)
// console.log(seet2)
/**
 * 解题思路
 * 将url进行切分， 
 * 如果是.的话不做处理、 
 * 如果是../的话跳到上层、
 * 如果是空的话也不做处理 ， 空的产生是因为//
 * 其他则执行放入栈中
 */
var simplifyPath = function(path) {
    let pathArr = path.split('/')
    let stack = []
    // console.log(stack)
    pathArr.forEach(item => {
      switch (item) {
        case '.':
          break;
        case '..':
          if (stack.length > 0) {
            stack.pop()
          }
          break; 
        case '':
          break;   
        default:
          stack.push(item)
          break;
      }
    })
    return '/' + stack.join('/')
};

// let url1 = "/home//foo/"
// let url2 = "/a/./b/../../c/"
// let url3 = "/a/../../b/../c//.//"
// console.log(simplifyPath(url1))
// console.log(simplifyPath(url2))

// console.log(simplifyPath(url3))

/**
 * 72编辑距离
 * 定义一个表达式D(i,j)。它表示从第1个字单词的第0位至第i位形成的子串和第2个单词的第0位至第j位形成的子串的编辑距离。
 * 然后，考虑动态规划的状态转移方程式，如下:

                                   D(i-1, j) + 1
D(i,j)=min                  ( D(i, j-1) + 1 )
                                   D(i-1, j-1) +2( if  X(i) != Y(j) ) ; D(i-1,j-1) ( if  X(i) == Y(j) )

上面的状态转移方程的含义是，D(i,j)的值，要么是D(i-1, j)的操作完成之后删除一个字符(第1个单词的第i个字符)，
要么是D(i, j-1)的操作完成之后增加一个字符(第2个单词的第j个字符)，
要么是D(i-1, j-1)的操作完成自后替换一个字符(如果第1个单词的第i个字符和第2个单词的第j个字符不等)，
或者是D(i-1, j-1)的操作完成自后什么也不做(如果第1个单词的第i个字符和第2个单词的第j个字符相等)。
其中，课件定义删除，插入，替换的操作步数分别为一步，一步，两步。
 */
var minDistance = function(word1, word2) {
    let len1 = word1.length 
    let len2 = word2.length 
    // 边界情况
    if (len1 === 0 && len2 === 0) {
      return 0
    } else if (len1 === 0) {
      return len2
    } else if (len2 === 0) {
      return len1
    }
    let dp = []
    for (let i = 0; i <= len1; i++) {
      dp[i] = []
      dp[i][0] = i
    }
    for (let j = 0; j <= len2; j++) {
      dp[0][j] = j
    }
    
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        let tmpStep
        let tmpStep2
        if (word1[i - 1] == word2[j - 1]){
          tmpStep2 = tmpStep = 0 + dp[i - 1][j - 1]
        } else {
          tmpStep = 1 + dp[i - 1][j - 1]
          tmpStep2 = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1)
        }
        dp[i][j] = Math.min(tmpStep, tmpStep2)
      }
    }
    return  dp[len1][len2]
};
// let word1 = "horse"
// let word2 = "ros"
// console.log(minDistance(word1, word2))
// console.log(minDistance('intention', 'execution'))
// console.log(minDistance('a', 'b'))

/**
 * 73赋零矩阵
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0. 
 */
var setZeroes = function(matrix) {
    let rowFlags = []
    let columFlags = []
    let rowlen = matrix.length
    let columlen = matrix[0].length
    for (let i = 0; i < rowlen; i++) {
      for (let j = 0; j < columlen; j++) {
        if (matrix[i][j] == 0) {
          rowFlags[i] = 1,
          columFlags[j] = 1
        }
      }
    }
    for (let i = 0; i < rowlen; i++) {
      if (rowFlags[i] && rowFlags[i] == 1) {
        for(let j = 0; j < columlen; j++) {
          matrix[i][j] = 0
        }
      }
    }
    for (let j = 0; j < columlen; j++) {
      if (columFlags[j] && columFlags[j] == 1) {
        for (let i = 0; i < rowlen; i++) {
          matrix[i][j] = 0
        }
      }
    }
    return matrix
};

// let arr1 = [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]

// let arr2 = [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// console.log(setZeroes(arr1))
// console.log(setZeroes(arr2))
/**
 * 二分查找
 */
function BanrySearch (arr, num) {
  let low = 0;
  let height = arr.length -1
  let mid = Math.floor((low + height) / 2)
  while (low <= height ) {
    let curnum = arr[mid]
    if (curnum == num) {
      break;
    } else if (curnum > num) {
      height = mid - 1
    } else if (curnum < num) {
      low = mid + 1
    }
    mid = Math.floor((low + height) / 2)
  }
  return arr[mid] == num ? mid : -1
}

// console.log(BanrySearch([3, 5, 6, 8, 22, 33], 8))

function simpleRender (express) {
  let keys = []
  let reg = /(-)(\$?\{(\w+)\})/
  let match = reg.exec(express)
  let joinstr = match[1]
  while (match && match[2]) {
    express = express.replace(match[0], '')
    keys.push(match[3])
    match = reg.exec(express)
  }
  if (express) {
    keys.unshift(express)
  }
  // console.log(keys)
  return function (obj) {
    let arr = []
    for (let i = 0, len = keys.length; i < len; i++) {
      if (!obj[keys[i]]) {
        return
      }
      arr.push(obj[keys[i]])
    }
    return arr.join(joinstr)
  }
  // console.log(newExpress)
}
// let renderstr = simpleRender('year-{month}-${day}')({
//   month: '00',
//   year:'2233',
//   day: '12'
// })
// console.log(renderstr)
// let renderstr2 = simpleRender('day-{month}-${year}')({
//   month: '00',
//   year:'2233',
//   day: '12'
// })
// console.log(renderstr2)

/**
 * 75颜色排序
 */
var sortColors = function(nums) {
    let maps = []
    for (let i = 0, len = nums.length; i < len; i++) {
      let curnum = nums[i]
      if (!maps[curnum]) {
        maps[curnum] = 1
      } else {
        maps[curnum]++
      }
    }
    let arr = []
    for (let i = 0, len = maps.length; i < len; i++) {
      let sublen = maps[i]
      for (let j = 0; j < sublen; j++) {
        arr.push(i)
      }
    }
    return arr
};

// console.log(sortColors([2,0,2,1,1,0]))

var mergeSort = function (nums) {
  function compare (arr1, arr2) {
    let newArr = []
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        newArr.push(arr1.shift())
      } else {
        newArr.push(arr2.shift())
      }
    }
    return newArr.concat(arr1, arr2)
  }

  function decompare (arr) {
    if (arr.length === 1) {
      return arr
    }
    var mid = ~~(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return compare(decompare(left), decompare(right))
  }

  return decompare(nums)
}
console.log(mergeSort([2,0,2,1,1,0]))