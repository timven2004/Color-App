import React from "react";
import { useParams } from "react-router-dom";
import chroma from "chroma-js"
import { withStyles } from '@material-ui/core/styles';
import ColorBox from "./ColorBox.js"
import Navbar from "./Navbar.js"

const styles={
	
	allShadesContainer:{
		width:"100vw",
		height:"100vh",
		"& .ColorBox":{
			width:"20%",
			height:"50%",
		}
	},
	
	
	
}

function SingleColorPalette(props){
	const {classes} = props;
	const {id, colorName} = useParams();
	const palette = props.existingPalettes.find((p)=>(p.id===id));
	const singleColorCode = palette.colors.find((c)=>(c.name ===colorName)).color;
	const singlePalette = GeneratingShades(singleColorCode);
	
	function getRange(hexColor){
		return[chroma(hexColor).darken(1.4).hex()]
	}

	function generateScale(hexColor, numberOfColors){
		return chroma.scale([`${getRange(hexColor)}`,hexColor,"#fff"]).mode("lab").colors(numberOfColors)
	}
	
	function GeneratingShades(colorCode){
		//initialize variables
		const levels = [50,100,200,300,400,500,600,700,800,900];
 		const result = {colors:{}};
		levels.forEach(level=>(result.colors[level]=""));
		//generating shades of colors in arraw format
		let shades = generateScale(colorCode, levels.length).reverse();
		//assinging the colors to the result Object
		for (let i=0;i<levels.length;i++){
			result.colors[levels[i]] = shades[i];}
		return result
	}
	
	const shadesDisplay = []
	
	for(let property in singlePalette.colors){
		shadesDisplay.push(<ColorBox 
						background = {singlePalette.colors[property]}
						name={`${colorName} ${property}`} 
						paletteID={id} 
						colorID={colorName}
						key={Math.random()}
						showLink={false}/>)			
	}
	shadesDisplay.shift();
	console.log(singlePalette)
	
	return(
		<div>
			<div>Single Color Palette, {id}, {colorName}, {singleColorCode}, {singlePalette.colors[400]}</div>
			<div className={classes.allShadesContainer}>{shadesDisplay}</div>
		</div>
		
	)
		
	
}


export default withStyles(styles)(SingleColorPalette);