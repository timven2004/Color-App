import React, {Component} from "react";
import ColorBox from "./ColorBox"
import "./MiniPalette.css"

function MiniPalette(props){
	
	const colorBoxes = props.palette.colors.map(color=>{
			return (<div className="tiny-colors" style={{background: color.color}}></div>)
		})
	
	return(<div className="MiniPalette">
		{colorBoxes}
		
		</div>
	)
}


export default MiniPalette