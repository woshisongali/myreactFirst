import React from 'react'
class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  addCount = (e) => {
    this.state.count++
    this.setState({
      count: this.state.count
    })
  }

  render() {
    return <h1
    onClick={this.addCount}>
    Hello, {this.props.name} {this.state.count}
    </h1>;
  }
}

export default Welcome