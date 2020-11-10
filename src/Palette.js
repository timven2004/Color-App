import React, {Component} from "react";
import ColorBox from "./ColorBox.js"
import "./Palatte.css"
import Navbar from "./Navbar.js"
import ChangingFormatCover from "./ChangingFormatCover.js"

class Palatte extends Component{
	constructor(props){
		super(props);
		this.state= {
			level: 500,
			format: "hex",
			changingFormat: false
		}
		this.changeLevel=this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
		this.changingFormatHandler = this.changingFormatHandler.bind(this)
	}
	
	changeLevel(newLevel = 500){
		if (this.state.level !== newLevel){
		this.setState({level: newLevel})
		}
	}
	
	changeFormat(value){
		this.setState({format: value, changingFormat: true}, this.changingFormatHandler);
	}
	
	changingFormatHandler(){
		setTimeout(()=>{this.setState({changingFormat: false})},2000)
	}
	
	render(){
		
		const colorBoxes = this.props.palatte.colors[this.state.level].map(color=>{
			return (<ColorBox background = {color[this.state.format]} name={color.name}/>)
		})
		
	
		
		return (
		<div className="Palette">
			{/*Navbar goes here*/}
			

			<Navbar 
				level={this.state.level} 
				changeLevel={this.changeLevel} 
				changeFormat = {this.changeFormat}/>
			<ChangingFormatCover 
				changingFormat={this.state.changingFormat} 
				format={this.state.format}/>
			<div className="Palette-colors">
				{/*bunch of color boxes*/}
				{colorBoxes}
			</div>
			{/*footer eventually*/}
			<footer className="Palette-footer">
			 {this.props.palatte.paletteName} <span className="emoji">{this.props.palatte.emoji}</span>
			</footer>

		</div>
		
		)
	}
}

export default Palatte;
