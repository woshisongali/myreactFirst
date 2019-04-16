export const getRect = (element) => {
  return element !== window 
    ? element.getBoundingClientRect()
    : {
      top: 0,
      bottom: window.innerHeight
    }
}

export const getEleChildren = (element) => {
  let arr = []
  const children = element.children
  for (let i = 0, len = children.length; i < len; i++) {
    if (children[i].nodeType === 1) {
      arr.push(children[i])
    }
  }
  return arr
}