import React, {Component} from 'react'
import ReactDOM from 'react-dom';
/*function Greet() {
    return <h1> Hello Hardik </h1>
}*/

/*Class Greet extends Component {
	render(){
		return <h1>HARDIK DEVANI</h1>
	}
}*/

const Greet = (props) => {
	console.log(props)
		return  <h1>Hello {props.name} {props.hsname}</h1> 
	}
export default Greet