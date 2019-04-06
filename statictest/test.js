var permute = function(nums) {
    let seet = []
    function injion (res, curnums) {
      if (!curnums || curnums.length === 0) {
        seet.push(res),
        return
      }
      for (let i = 0, len < curnums.length; i < len; i++) {
        injoin(res.join(curnums[i]), curnums.splice(i, 1))
      }
    }
    injion([], nums)
    return seet
};

permute([1, 2, 3])