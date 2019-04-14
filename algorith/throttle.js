function throttle (fun, derution) {
  let first = null
  let context = null
  let timer = null
  let later = function () {
    let args = arguments
    fun(context, args)
    clearTimeout(timer)
    timer = null
  }

  return function () {
    context = this
    let args = arguments
    if (!first) {
      first = true
      later(args)
      return
    }
    if (timer) {
      return
    }
    timer = setTimeout(function () {
      later(args)
    }, derution)
  }

}
let myfunc = function () {
  console.log('I am a throttle callback')
}
let myThrottle = throttle(myfunc, 1000)
let count = 0
let testThrottle = setInterval(function () {
  myThrottle()
  count++
  if (count > 20) {
    clearInterval(testThrottle)
  }
}, 200)