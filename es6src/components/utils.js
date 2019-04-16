export const throttle = (func, wait, options) => {
  let context, args, result
  let timeout = null
  let previous = 0
  if (!options) options = {}

  const later = function() {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }

  return function() {
    let now = Date.now()
    if (!previous && options.leading === false) previous = now
    let remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}


export const debounce = (func, wait, immediate) => {
    let timeout, result, context, args

    const later = function() {
      timeout = null
      if (args) result = func.apply(context, args)
      if (!timeout) context = args = null
    }

    const debounced = () => {
      args = arguments
      context = this
      if (timeout) clearTimeout(timeout)
      if (immediate) {
        let callNow = !timeout
        timeout = setTimeout(later, wait)
        if (callNow) result = func.apply(constext, args)
      } else {
        timeout = setTimeout(later, wait)
      }
      return result
    }

    debounced.cancel = function() {
      clearTimeout(timeout)
      timeout = null
    }
    return debounced
}
/**
 *  the example
 *  console.log('has mounted')
    let testDebounce = debounce(() => {
      console.log('seee the debounce')
    }, 100)
    testDebounce()
    testDebounce()
 */

export const shallowEqual = (obj1, obj2) => {
  if (obj1 === obj2 || (obj1 !== obj1 && obj2 !== obj2)) {
    return true
  }
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) {
    return false
  }
  let result = true
  for (let i = 0, len = keys1.length; i < len; i++) {
    let key = keys1[i]
    if (obj2[key] === void 0 || obj1[key] != obj2[key]) {
      result = false
      break
    }
  }
  return result
}