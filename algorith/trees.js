/**
 * 普通满二叉树的创建
 * 采用队列的方式进行实现
 */
function TreeNode (val) {
  this.val = val 
  this.left = null
  this.right = null
}
let Tree = function (node) {
  this.queue = []
  this.init(node)
}
Tree.prototype = {
  init (node) {
    this.root = node
    this.queue.push(this.root)
  },
  insert (node) {
    let parent = this.queue.shift()
    while ((parent.left && parent.right) || parent.value === null) {
      parent = this.queue.shift()
    } 
    if (!parent.left ) {
      parent.left = node
    } else {
      parent.right = node
    }
    if (!(parent.left && parent.right)) {
      this.queue.unshift(parent)
    }
    this.queue.push(node)
  }
}

function createTree(arr) {
  let tree = new Tree(new TreeNode(arr[0]))
  for (let i = 1, len = arr.length; i < len; i++) {
    tree.insert(new TreeNode(arr[i]))
  }
  console.log(tree)
}

createTree([5,1,4,null,null,3,6])
