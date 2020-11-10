import React, {Component} from "react";
import "./ChangingFormatCover.css"

class ChangingFormatCover extends Component{
	constructor(props){
		super(props)
		}
	
	render(){
		
		const randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		const randomColor2 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);


		
		return(
		<div className= {`${this.props.changingFormat ? "cover" : "null"}`} style={{ background: `linear-gradient(to right, ${randomColor}, ${randomColor2})`}} >
		<div className="textContainer">
		<h1>Color Format Changed!</h1>
		<h2>{this.props.format.toUpperCase()}</h2>
		</div>
		</div>
			
			)
	}
}

export default ChangingFormatCover;