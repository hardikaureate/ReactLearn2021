import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Welcome extends Component {
	render(){
		return <h1>Welcome {this.props.name} Hello Welcome {this.props.hsname}</h1>
	}
}
export default Welcome