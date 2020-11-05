import React, {Component} from "react";
import "./ColorBox.css"

class Palatte extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return (
		<div className ="ColorBox" style={{background: this.props.background}}>
			<div className="copy-container">
				<div className="box-content">
					<span>{this.props.name}</span>
				</div>
				<button className="copy-button">Copy</button>
			</div>
		<span className="see-more">More</span>	
		</div>
		)
	}
}

export default Palatte;
