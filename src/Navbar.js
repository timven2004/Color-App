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

class Navbar extends Component{
	constructor(props){
        super(props);

	}
    
 

	render(){
		return (
			<header className="Navbar">
                <div className="logo">
                    <Link to ="#">ReactColorPicker</Link>
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
					500: "500"
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
            </header>
		
		)
	}
}






export default Navbar;