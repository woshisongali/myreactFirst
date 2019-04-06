function permute(str) {

  var result = [];
  if (str.length == 1) {
    return [str]
  } else {

    var preResult = permutate(str.slice(1));
    for (var j = 0; j < preResult.length; j++) {
      for (var k = 0; k < preResult[j].length + 1; k++) {
        var temp = preResult[j].slice(0, k) + str[0] + preResult[j].slice(k);
        result.push(temp);
      }
    }
    return result;

  }
}


/*  
全排列（递归交换）算法  
1、将第一个位置分别放置各个不同的元素；  
2、对剩余的位置进行全排列（递归）；  
3、递归出口为只对一个元素进行全排列。  
*/
function permute2(orginArr) {

  function swap(arr, i, j) {
    if (i != j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }

  let count = 0

  function show(arr) {
    console.log(arr)
  }

  function recurPerm(arr) {
    (function fn(n) {
      for (let i = n; i < arr.length; i++) {
        swap(arr, i, n)
        if (n + 1 < arr.length - 1) {
          fn(n + 1)
        } else {
          show(arr)
          swap(arr, i, n)
        }
      }
    })(0)
  }
  recurPerm(orginArr)
}

//  permute2([9, 0, 8])

/*  
全排列（递归链接）算法  
1、设定源数组为输入数组，结果数组存放排列结果（初始化为空数组）；  
2、逐一将源数组的每个元素链接到结果数组中（生成新数组对象）；  
3、从原数组中删除被链接的元素（生成新数组对象）；  
4、将新的源数组和结果数组作为参数递归调用步骤2、3，直到源数组为空，则输出一个排列。  
*/
function permute3(orginArr) {
  function show(arr) {
    console.log(arr)
  }

  function perm(arr) {
    (function fn(source, result) {
      if (source.length == 0) {
        show(result)
      } else {
        for (let i = 0, len = source.length; i < len; i++) {
          fn(source.slice(0, i).concat(source.slice(i + 1)), result.concat(source[i]))
        }
      }
    })(arr, [])
  }
  perm(orginArr)
}
// permute3([9, 1, 8])


/*  
全排列（递归回溯）算法  
1、建立位置数组，即对位置进行排列，排列成功后转换为元素的排列；  
2、建立递归函数，用来搜索第n个位置；  
3、第n个位置搜索方式与八皇后问题类似。  
*/
function permute4(orginArr) {
  var count = 0;

  function show(arr) {
    console.log(arr)
  }

  function seek(index, n) {
    if (n >= 0) //判断是否已回溯到了第一个位置之前，即已经找到了所有位置排列  
      if (index[n] < index.length - 1) { //还有下一个位置可选  
        index[n]++; //选择下一个位置  
        if ((function () { //该匿名函数判断该位置是否已经被选择过  
            for (var i = 0; i < n; i++)
              if (index[i] == index[n]) return true; //已选择  
            return false; //未选择  
          })())
          return seek(index, n); //重新找位置  
        else
          return true; //找到  
      }
    else { //当前无位置可选，进行递归回溯  
      index[n] = -1; //取消当前位置  
      if (seek(index, n - 1)) //继续找上一个位置  
        return seek(index, n); //重新找当前位置  
      else
        return false; //已无位置可选  
    } else
      return false;
  }

  function perm(arr) {
    var index = new Array(arr.length);
    for (var i = 0; i < index.length; i++)
      index[i] = -1; //初始化所有位置为-1，以便++后为0  
    for (i = 0; i < index.length - 1; i++)
      seek(index, i); //先搜索前n-1个位置  
    while (seek(index, index.length - 1)) { //不断搜索第n个位置，即找到所有位置排列  
      var temp = [];
      for (i = 0; i < index.length; i++) //将位置之转换为元素  
        temp.push(arr[index[i]]);
      show(temp);
    }
  }

  perm(orginArr)
}
permute4([88, 33, 22])