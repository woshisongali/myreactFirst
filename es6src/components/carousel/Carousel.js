import React from 'react'
import classNames from 'classnames'
import style from './index.styl'
import {
  debounce
} from '../utils'

console.log(style)
class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: 'hello'
    }
  }

  componentDidMount () {
   
  }

  render () {
    return (
      <div className={classNames(
        style['red-font']
      )}>
        to create the carouse hot me
      </div>
    )
  }
}

export default Carousel