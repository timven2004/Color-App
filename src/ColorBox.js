import React, {Component} from "react";
import "./ColorBox.css"
import {CopyToClipboard} from "react-copy-to-clipboard";

class Palatte extends Component{
	constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this);
		this.componentDidUpdate=this.componentDidUpdate.bind(this);
		this.state={
			copyButtonText: "Copy",
			animate: false
		};
		
	}
	
	handleClick(){
		this.setState({copyButtonText: 
						`"Copied!"`,
					  animate: true});
	}
	
	componentDidUpdate(prevProps,  prevState){
		if (this.state.copyButtonText !== prevState.copyButtonText && this.state.animate !== prevState.animate){setTimeout(()=>{
			this.setState({copyButtonText: "Copy",
						  animate: false})}, 2000)
	}}

	
	render(){
		return (
		<CopyToClipboard text={this.props.background} >
		<div className ="ColorBox" style={{background: this.props.background}} onClick={this.handleClick} >
			{/*<div className="copy-container">*/}
				<div className="box-content">
					<span>{this.props.name}</span>
				</div>
				<button className=
					{`copy-button 
					${this.state.animate ? "animate": "none"}` }
					>{this.state.copyButtonText}					
				</button>
				<div className=
					{`colorCode 
					${this.state.animate ? "animate colorCodeShown": "none"}
					`}
					>{this.props.background}						
				</div>
			{/*</div>*/}
		<span className="see-more">More</span>	
		</div>
		</CopyToClipboard>
		)
	}
}

export default Palatte;
