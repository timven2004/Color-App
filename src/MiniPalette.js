import React from "react";
// import "./MiniPalette.css"
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from "@material-ui/icons/Delete"

const styles ={

	

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
},
deleteButton:{
		position:"absolute",
		display:"inline",
		right:"5px",
		top:"3px",
		opacity:"0",
		zIndex:"10",
		backgroundColor:"#eb3d30",
		padding:"5px",
		transition:"0.5s",
		borderRadius:"3px"
	},
	
MiniPalette: {
	width: "95%",
	height: "95%",
	display: "flex",
	flexFlow: "column",
	margin:"5px",
	alignContent: "flex-start",
	color: "black",
	cursor: "pointer",
	position:"relative",
	"&:hover":{
		"& svg":{
			opacity:"0.9"
		}
		
	},
	transition:"0.4s"
},
	
}


function MiniPalette(props){
	const { classes } = props;

	const colorBoxes = props.palette.colors.map(color=>{
			return (<div className={classes.tinyColors} style={{background: color.color}}></div>)
		})
	
	const deletePaletteClicked = (e) => {
		e.stopPropagation();
		props.deletePalette(props.id)
	}
	
	return(
		<div className={classes.MiniPalette} onClick={props.handleClick}>
			<DeleteIcon className={classes.deleteButton} onClick={deletePaletteClicked}/>
			<div className={classes.colorFlakes}>{colorBoxes}</div>
			<div className={classes.p1}>
				<span className={classes.span1}>{props.palette.paletteName}</span> 
				<span className={classes.span1}>{props.palette.emoji}</span>
			</div>
		</div>
	)
}


export default withStyles(styles)(MiniPalette);