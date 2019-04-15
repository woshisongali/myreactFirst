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