// import PropTypes from 'prop-types'
import classNames from 'classnames'
import React from 'react'

// const propTypes = {
//   prefix: PropTypes.string,
//   variant: PropTypes.string,
//   pill: PropTypes.bool
// }


const Badge = ({variant, prefix='prefix', 
pill = false, className, ...props}) => {
  // 通过...props将其余的参数进行整合 ，在这里我们可以拿到 组件的挂载节点children
  return (
    <span
      {...props}
      className={classNames(
        className,
        prefix,
        pill && `${prefix}-pill`,
        variant && `${prefix}-${variant}`
      )}
    /> 
  ) 
}

export default Badge