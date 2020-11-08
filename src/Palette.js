import React, {Component} from "react";
import ColorBox from "./ColorBox.js"
import "./Palatte.css"
import Navbar from "./Navbar.js"

class Palatte extends Component{
	constructor(props){
		super(props);
		this.state= {
			level: 500
		}
		this.changeLevel=this.changeLevel.bind(this);

	}
	
	changeLevel(newLevel = 500){
		if (this.state.level !== newLevel){
		this.setState({level: newLevel})
		}
	}
	
	render(){
		
		const colorBoxes = this.props.palatte.colors[this.state.level].map(color=>{
			return (<ColorBox background = {color.hex} name={color.name}/>)
		})
		
	
		
		return (
		<div className="Palette">
			{/*Navbar goes here*/}
			<Navbar level={this.state.level} changeLevel={this.changeLevel}/>
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
