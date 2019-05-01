import React, { Component } from 'react';

const withAuthenticate = FirstComponent => SecondComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      }
    }
    
    componentDidMount() {
      console.log('this.props class:', this.props);
      this.setState({
        ...this.state,
        loggedIn: window.localStorage.getItem('user') ? true : false,
      })
    }

    render() {
      return this.props.user
             ? <FirstComponent {...this.props} />
             : <SecondComponent {...this.props} />
    }
  }
}

export default withAuthenticate;
