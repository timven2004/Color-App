import React, {Component} from "react";
import ColorBox from "./ColorBox.js"
import "./Palatte.css"
import Navbar from "./Navbar.js"
import ChangingFormatCover from "./ChangingFormatCover.js"

class Palette extends Component{
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
		const paletteID = this.props.palette.id;
		const colorBoxes = this.props.palette.colors[this.state.level].map(color=>{
			return (<ColorBox 
						background = {color[this.state.format]} 
						name={color.name} 
						paletteID={paletteID} 
						colorID={color.id}
						key={Math.random()}
						showLink={true}/>
				  	)
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
			 {this.props.palette.paletteName} <span className="emoji">{this.props.palette.emoji}</span>
			</footer>

		</div>
		
		)
	}
}

export default Palette;
