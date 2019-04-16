// 通过ref拿到其对应的节点
import classNames from 'classnames'
import React from 'react'
import {
  throttle,
  shallowEqual
} from './utils'
import {
  getRect
} from './dom'

const TRIGGER_EVENTS = [
  'resize',
  'scroll',
  'load'
]

const eventOperator = {
  observers: [],
  initEvents () {
    let target = window
    let throttleUpate = throttle(this.update, 100).bind(this)
    TRIGGER_EVENTS.forEach(eventName => {
      target.addEventListener(eventName, (event) => {
        throttleUpate()
      })
    })
  },

  update () {
    this.observers.forEach(Affix => {
      Affix.updatePosition()
    })
  },
  addObserver (curAffix) {
    this.observers.push(curAffix)
    this.update()
    // curAffix.addEventListener()
  },

  removeObserver (curAffix) {
    let targetIndex = -1
    for (let i = 0, len = this.observers.length; i < len; i++) {
      if (curAffix === affix) {
        targetIndex = index
        break
      }
    }
    if (targetIndex > -1) {
      this.observers.splice(targetIndex, 1)
    }
  }


}

eventOperator.initEvents()

class Affix extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: 'hello',
      affixStyle: {},
      placeholderStyle: {}
    }
    this.preStyle = {
      affix: {},
      placeholder: {}
    }
    this.myRef = React.createRef()
    this.affixEle = null
  }

  componentDidMount () {
    // console.log(this.myRef.current)
    this.placeholderNode = this.myRef.current
    this.affixEle = this.myRef.current.querySelector('.affix-ele')
    eventOperator.addObserver(this)
  }
  componentWillUnmount () {
    eventOperator.removeObserver(this)
  }

  setAffixStyle () {
    const targetRect = getRect(this.affixEle)
    const placeholderReact = getRect(this.placeholderNode)
    let top = targetRect.top
    let bottom = targetRect.bottom
    let offsetTop = this.props.offsetTop
    let offsetBottom = this.props.offsetBottom
    let newStyle = {}
    if (offsetTop !== void 0 &&  (top < 0 || top  > placeholderReact.top)) {
      newStyle.affix = {
        position: 'fixed',
        top: parseInt(offsetTop),
        width: placeholderReact.width,
        height: placeholderReact.height
      }
      newStyle.placeholder = {
        width: placeholderReact.width,
        height: placeholderReact.height
      }
    } else if (offsetBottom !== void 0 && 
      ( (placeholderReact.bottom - placeholderReact.height) < 0) 
      || placeholderReact.top > window.innerHeight) {
      newStyle.affix = {
        position: 'fixed',
        bottom: parseInt(offsetBottom),
        width: placeholderReact.width,
        height: placeholderReact.height
      }
      newStyle.placeholder = {
        width: placeholderReact.width,
        height: placeholderReact.height
      }
    } else {
      newStyle.affix = {}
      newStyle.placeholder = {}
    }

    if (!shallowEqual(this.preStyle.affix, newStyle.affix)) {
      this.setState({
        affixStyle: newStyle.affix,
        placeholderStyle: newStyle.placeholder
      })
      this.preStyle = newStyle
    }
  }
  
  updatePosition () {
    this.setAffixStyle()
    
  }
  render () {
    return (
      <div ref={this.myRef} style={this.state.placeholderStyle}>
        <div className="affix-ele" style={this.state.affixStyle}>
         {this.props.children}
        </div>
      </div>
    )
  }
}

export default Affix
