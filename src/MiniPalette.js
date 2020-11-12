import React, {Component} from "react";
import ColorBox from "./ColorBox"
// import "./MiniPalette.css"
import { withStyles } from '@material-ui/core/styles';

const styles ={
MiniPalette: {
	width: "95%",
	height: "95%",
	display: "flex",
	flexFlow: "column",
	margin:"5px",
	alignContent: "flex-start",
	color: "black",
	cursor: "pointer",
},

tinyColors: {
	width:"20%",
	height:"25%",	
},


	
emoji:{
	color: "black",
},
	
p1:{
	textDecoration: "none",
	display: "flex",
	justifyContent: "space-between",
	width:"95%",
	color:"Black",
	padding: "3px",
	},

colorFlakes:{
	display: "flex",
	flexFlow: "row wrap",
	alignContent: "flex-start",
	width:"100%",
	flexGrow:"1",
	backgroundColor:"grey",
}
}


function MiniPalette(props){
	const { classes } = props;

	const colorBoxes = props.palette.colors.map(color=>{
			return (<div className={classes.tinyColors} style={{background: color.color}}></div>)
		})
	
	return(
		<div className={classes.MiniPalette} onClick={props.handleClick}>
			<div className={classes.colorFlakes}>{colorBoxes}</div>
			<div className={classes.p1}>
				<span className={classes.span1}>{props.palette.paletteName}</span> 
				<span className={classes.span1}>{props.palette.emoji}</span>
			</div>
		</div>
	)
}


export default withStyles(styles)(MiniPalette);