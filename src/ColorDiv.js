import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = {
	colorBox:{
		height:"25%",
		width:"20%",
		margin: "0",
		display:"inline-block",
		position:"relative",
		cursor:"pointer",
		marginBottom:-"6px",
		cursor:"pointer",
	}
}


function ColorDiv (props){
	
	const { classes } = props;

	return(<div className={classes.colorBox} style={{backgroundColor: props.backgroundColor}}>{props.name}</div>)
}

export default withStyles(styles)(ColorDiv);