import React, {Component} from "react";
import ColorBox from "./ColorBox"
// import "./MiniPalette.css"
import { withStyles } from '@material-ui/core/styles';

const styles ={
MiniPalette: {
	width: "450px",
	height: "250px",
	display: "flex",
	flexFlow: "row wrap"
},

tinyColors: {
	width:"20%",
	height:"25%",
}
}


function MiniPalette(props){
	const { classes } = props;

	const colorBoxes = props.palette.colors.map(color=>{
			return (<div className={classes.tinyColors} style={{background: color.color}}></div>)
		})
	
	return(<div className={classes.MiniPalette}>
		{colorBoxes}
		
		</div>
	)
}


export default withStyles(styles)(MiniPalette);