import React from 'react';
import { connect } from 'react-redux';

class Test extends React.Component {


  render() {
    return (
        <div>{this.props.copy}</div>
    )
  }
}

export default connect(
    state => ({
      copy: state.data.copy
    })
)(Test)