import React, {Component} from "react";
import ColorBox from "./ColorBox"
// import "./MiniPalette.css"
import { withStyles } from '@material-ui/core/styles';

const styles ={
MiniPalette: {
	width: "200px",
	height: "200px",
	display: "flex",
	flexFlow: "row wrap",
	margin:"10px",
	alignContent: "flex-start",
	
},

tinyColors: {
	width:"20%",
	height:"15%",	
},


	
emoji:{
	
	
},
	
p1:{
	textDecoration: "none",
	display: "flex",
	justifyContent: "space-between",
	width:"100%",
	color:"Black",
	margin:"8px 0px",
	},

	
}


function MiniPalette(props){
	const { classes } = props;

	const colorBoxes = props.palette.colors.map(color=>{
			return (<div className={classes.tinyColors} style={{background: color.color}}></div>)
		})
	
	return(
		<div className={classes.MiniPalette}>
		{colorBoxes}
			<div className={classes.p1}>
				<span className={classes.span1}>{props.palette.paletteName}</span> 
				<span className={classes.span1}>{props.palette.emoji}</span>
			</div>
		</div>
	)
}


export default withStyles(styles)(MiniPalette);