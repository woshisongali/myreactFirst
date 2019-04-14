
/**
 * arr[]表示当前获得的部分解；

　　k表示搜索深度；

　　extraParam表示用于传递的更多的参数；

　　is_a_solution(a,k,input)判断当前的部分解向量a[1...k]是否是一个符合条件的解

　　construct_candidates(a,k,input,c,ncandidates)根据目前状态，构造这一步可能的选择，存入c[]数组，其长度存入ncandidates

　　process_solution(a,k,input)对于符合条件的解进行处理，通常是输出、计数等

　　make_move(a,k,input)和unmake_move(a,k,input)前者将采取的选择更新到原始数据结构上，后者把这一行为撤销。
 */
/*
let finished = false // 是否获得全部解
function backtrack (arr, k, extraParam) {
  let c = []  // 此处搜索的候选
  let ncandidtaes // 候选数目
  let i 
  if (is_a_solution(arr, k, extraParam)) {
    process_solut(arr, k, extraParam)
  } else {
    k = k + 1
    construct_candidates(arr, k, extraParam, c, ncandidtaes)
    for (let i = 0; i < ncandidtaes; i++) {
      arr[k] = c[i]
      make_move(arr, k, extraParam)
      backtrack(arr, k, extraParam)
      unmake_move(arr, k, extraParam)
      if (finished) {
        return
      }
    }
  }
}
*/

