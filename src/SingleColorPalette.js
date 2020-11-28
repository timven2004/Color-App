import React from "react";
import { useParams } from "react-router-dom";
import chroma from "chroma-js"
import { withStyles } from '@material-ui/core/styles';
import ColorBox from "./ColorBox.js"
import Navbar from "./Navbar.js"
import { useEffect, useState } from "react";
import ChangingFormatCover from "./ChangingFormatCover.js"
import Palettefooter from "./PaletteFooter.js"
import {
  Link
} from "react-router-dom";

const styles={
	
	allShadesContainer:{
		flex: "1",
		display: "flex",
		flexFlow: "row wrap",
		"& .ColorBox":{
			width:"20%",
			height:"50%",
			"@media (max-width:900px)":{
				width:"50%",
				height:"30%"
			},
			"@media (max-width:500px)":{
				width:"100%",
				height:"20%"
			}
		},
		"& .goBack":{
			width:"20%",
			height:"50%",
			"@media (max-width:900px)":{
				width:"50%",
				height:"30%"
			},
			"@media (max-width:500px)":{
				width:"100%",
				height:"20%"
			}
		}
	},
	wholePageContainer:{
		width:"100vw",
		height:"100vh",
		display: "flex",
		flexFlow:"column",
	},
	
	Colordiv:{
		"@media (max-width:900px)":{
			width:"50%"
		},
		"@media (max-width:500px)":{
			width:"100%"
		}
	},
	
	goBack:{
		width:"20%",
		height:"50%",
  		justifyContent: "center",
  		alignItems: "center",
		display:"flex",
		background: "black",
		color:"white",
		"& span":{
			padding:"10px",
			background: "rgba(255,255,255,0.3)",
			borderRadius:"3px",
		},
		"& a":{
			textDecoration:"none",
			color:"white",

		},
		"@media (max-width:900px)":{
				width:"50%",
				height:"30%"
			},
			"@media (max-width:500px)":{
				width:"100%",
				height:"20%"
			}
	}
}

function SingleColorPalette(props){
	const {classes} = props;
	const {id, colorName} = useParams();
	const palette = props.existingPalettes.find((p)=>(p.id==id));
	const singleColorCode = palette.colors.find((c)=>(c.name.toLowerCase() ==colorName)).color;
	const singlePalette = GeneratingShades(singleColorCode);
	const [changingFormat, setChangingFormat] = useState(false);
	const [format, setFormat] = useState("hex");
	
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
			result.colors[levels[i]] = {
				hex: shades[i],
				rgb: chroma(shades[i]).css(),
				rgba: chroma(shades[i]).css().replace("rgb","rgba").replace(")",",1.0)")}

		}
		return result
	}
	
	const shadesDisplay = []
	
	for(let property in singlePalette.colors){
		shadesDisplay.push(<ColorBox 
						background = {singlePalette.colors[property][format]}
						name={`${colorName} ${property}`} 
						paletteID={id} 
						colorID={colorName}
						key={Math.random()}
						showLink={false}/>)			
	}
	shadesDisplay.shift();
	console.log(singlePalette)
	
		

	
	function changingFormatHandler(){
		setTimeout(()=>{setChangingFormat(false)},2000)
	}

	function changeFormat(value){
		setFormat(value); 
		setChangingFormat(true);
		changingFormatHandler();
	}


	
	return(
		<div className={classes.wholePageContainer}>
			<Navbar showAllColors = {false} 				
				changeFormat = {changeFormat}/>
			<ChangingFormatCover 
				changingFormat={changingFormat} 
				format={format}/>
			<div className={classes.allShadesContainer}>{shadesDisplay}
				<div className={classes.goBack}>	
					<Link to ={`/palette/${id}`}>
						<span>GO BACK</span>
					</Link>
</div>
			</div>
			<Palettefooter emoji={palette.emoji} paletteName={palette.paletteName}/>	
		</div>
		
	)
		
	
}


export default withStyles(styles)(SingleColorPalette);