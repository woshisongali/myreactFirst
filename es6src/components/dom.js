export const getRect = (element) => {
  return element !== window 
    ? element.getBoundingClientRect()
    : {
      top: 0,
      bottom: window.innerHeight
    }
}