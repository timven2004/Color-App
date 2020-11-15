import React, {Component} from "react";
import "./ColorBox.css"
import {CopyToClipboard} from "react-copy-to-clipboard";
import {Link} from "react-router-dom";
import chroma from "chroma-js";

class Palette extends Component{
	constructor(props){
		super(props);
		this.handleClick=this.handleClick.bind(this);
		this.componentDidUpdate=this.componentDidUpdate.bind(this);
		this.state={
			copyButtonText: "Copy",
			animate: false,
			showLink: true,
			whiteText: false,
			blackText: false,
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
		
		const luminisity = chroma(this.props.background).luminance();
		if (luminisity<0.2 && !this.state.whiteText){
			this.setState({whiteText: true})
		}
		if (luminisity>0.65 && !this.state.blackText){
			this.setState({blackText: true})
		}
		
		return (
		<CopyToClipboard text={this.props.background} >
		<div className ="ColorBox" style={{background: this.props.background}} onClick={this.handleClick} >
			{/*<div className="copy-container">*/}
				<div className={`box-content ${this.state.whiteText? "whiteText": "none"}`}>
					<span>{this.props.name}</span>
				</div>
				<button className=
					{`copy-button 
					${this.state.blackText ? "blackText": "none"}
					${this.state.animate ? "animate": "none"}
` }
					>{this.state.copyButtonText}					
				</button>
				<div className=
					{`colorCode 
					${this.state.animate ? "animate colorCodeShown": "none"}
					${this.state.blackText? "blackText":"none"}
					`}
					>{this.props.background}					
				</div>
		{this.props.showLink && <Link to ={`/palette/${this.props.paletteID}/${this.props.colorID}`} onCLick={e=>(e.stopPropagation())}>
		<span className={`see-more ${this.state.blackText? "blackText": "none"}`}>More</span>	
		</Link>}
		
		</div>
		</CopyToClipboard>
		)
	}
}

export default Palette;
