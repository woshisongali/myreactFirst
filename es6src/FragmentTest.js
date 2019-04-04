
/**
 * ragment 与Vue中template相似
 * 标签 <React.Fragment> 也可以写作<>空标签
 * key 是唯一可以传递给 Fragment 的属性
 */
import React from 'react'

class Columns extends React.Component {

  render () {
    return (
      <React.Fragment>
        <td>111</td>
        <td>222</td>
      </React.Fragment>
    )
  }
}

class Table extends React.Component {
  render () {
    return (
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table