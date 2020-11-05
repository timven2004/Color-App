import React, {Component} from "react";
import "./ColorBox.css"

class Palatte extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return (
		<div className ="ColorBox" style={{background: this.props.background}}>
			<span>{this.props.name}</span>
			<span>More</span>	
		</div>
		)
	}
}

export default Palatte;
