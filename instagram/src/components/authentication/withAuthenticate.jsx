import React, { Component } from 'react';

const withAuthenticate = FirstComponent => SecondComponent => {
  return class extends Component {
    render() {
      return this.props.user
             ? <FirstComponent {...this.props} />
             : <SecondComponent {...this.props} />
    }
  }
}

export default withAuthenticate;
