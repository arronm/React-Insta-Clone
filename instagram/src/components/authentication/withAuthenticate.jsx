import React, { Component } from 'react';

const withAuthenticate = AuthComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: 'arronm',
      }
    }

    render() {
      return <AuthComponent {...this.props} />
    }
  }
}

export default withAuthenticate;