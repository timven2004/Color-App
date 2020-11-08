import React, {Component} from "react";
import ColorBox from "./ColorBox.js"
import "./Palatte.css"
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

class Palatte extends Component{
	constructor(props){
		super(props);
		this.state= {
			level: 500
		}
		this.changeLevel=this.changeLevel.bind(this)
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
			<div className="slider">
			<Slider 
				min={100} 
				max={900} 
				defaultValue={this.state.level} 
				step={100} 
				marks={{
					500: "500"
				}}
				ariaValueTextFormatterForHandle = {(value)=>this.changeLevel(value)}
				trackStyle = {[{"background-color": "transparent"}]}
				handleStyle	={[{"background-color": "green",
								"border-color":"green",
								"outline":"none",				
			}]}
				railStyle = {{"height": "8px"}}
				/>
			</div>
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
