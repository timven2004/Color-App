import React from "react";
import { withStyles } from '@material-ui/core/styles';


const styles={
	
	paletteFooter:{
		backgroundColor:"white",
		height:"5vh",
		display:"flex",
		justifyContent: "flex-end",
		alignItems:"center",
		fontWeight:"bold",
		fontSize:"1.2rem"
	}
	
}
function Palettefooter(props){
	
	const {classes} = props;

	
	return(
			<footer className={classes.paletteFooter}>
			 {props.paletteName} <span className="emoji">{props.emoji}</span>
			</footer>
	)
		
	
}


export default withStyles(styles)(Palettefooter);