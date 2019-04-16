import React from 'react'
import classNames from 'classnames'
import indexCss from './index.styl'
import {
  debounce
} from '../utils'
import {
  getEleChildren
} from '../dom'

class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: 'hello'
    }
    this.myRef = React.createRef()
  }

  componentDidMount () {
   
   const currentEle = this.myRef.current
  }

  renderChildren () {
    const { children } = this.props
    const newChildren = [
      children[children.length - 1],
      ...children,
      children[0]
    ]
    return React.Children.map(newChildren, (child, index) => {
      console.log(index)
      const childClone = React.cloneElement(child, {className: 'slid-item'})
      return childClone
    })
  }

  render () {
    return (
      <div ref={this.myRef} className={classNames(
        indexCss['slick-track']
      )}>
        {this.renderChildren()}
      </div>
    )
  }
}

export default Carousel