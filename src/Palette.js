import React, {Component} from "react";
import ColorBox from "./ColorBox.js"
import "./Palatte.css"

class Palatte extends Component{
	constructor(props){
		super(props)
	}
	
	
	
	render(){
		
		const colorBoxes = this.props.palatte.colors.map(color=>{
			return (<ColorBox background = {color.color} name={color.name}/>)
		})
		
		return (
		<div className="Palette">
			{/*Navbar goes here*/}
			<div className="Palette-colors">
				{/*bunch of color boxes*/}
				{colorBoxes}
			</div>
			{/*footer eventually*/}
		</div>
		)
	}
}

export default Palatte;
