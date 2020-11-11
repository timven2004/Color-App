import React,{Component} from 'react';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import "./Navbar.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import{Select, MenuItem} from "@material-ui/core";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

class Navbar extends Component{
	constructor(props){
        super(props);
	this.state={
		format: "hex"
	}
	this.handleChange=this.handleChange.bind(this);
	}
    
 	handleChange(e){
		this.setState({format: e.target.value});
		this.props.changeFormat(e.target.value)
	}

	render(){
		return (
			<header className="Navbar">
				<div className="leftsideElement">
                <div className="logo">
                    <Link to ="/">ReactColorPicker</Link>
                </div>
                <div className="slider-container">
					<span>
					Level: {this.props.level}	
					</span>
					<div className="slider">
						<Slider 
						min={100} 
						max={900} 
						defaultValue={this.props.level} 
						step={100} 
						marks={{
							500: "drag me!"
						}}
						ariaValueTextFormatterForHandle = {(value)=>this.props.changeLevel(value)}
						trackStyle = {[{"background-color": "transparent"}]}
						handleStyle	={[{"background-color": "green",
										"border-color":"green",
										"outline":"none",				
					}]}
						railStyle = {{"height": "5px"}}
						/>
					</div>
                </div>
				</div>
				
				<div className="select-container">
					<FormControl>
					<Select value={this.state.format}
							inputProps={{ 'aria-label': 'Without label' }} 
							onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #FFFFFF</MenuItem>		
						<MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>

					</Select>
		        	<FormHelperText>Select Color Format</FormHelperText>
					</FormControl>
						</div>
            </header>
		
		)
	}
}






export default Navbar;