import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidMount(){
		this.setState({hasError : false});
	}

	render(){
		return (
			this.state.hasError ?
			<h1>Ooops that is not good</h1> :
			this.props.children
		)
	}
}

export default ErrorBoundry;
