import React from "react";
import { useParams } from "react-router-dom";



function SingleColorPalette(props){
	
	const {id, colorName} = useParams();
	const palette = props.existingPalettes.find((p)=>(p.id===id));
	const singleColorCode = palette.colors.find((c)=>(c.name ===colorName)).color;
	console.log(palette);
	
	function GeneratingShades(){
		return 
	}
	
	return(
		<div>Single Color Palette, {id}, {colorName}, {singleColorCode}</div>
	)
		
	
}


export default SingleColorPalette;