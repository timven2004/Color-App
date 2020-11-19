import React from "react";
import { withStyles } from '@material-ui/core/styles';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


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
		"&:hover svg":{
			color:"white",
			transition:"0.3s",
			transform:"scale(1.4)"
		}
	},
	boxContent:{
		position:"absolute",
		width:"100%",
		left:"0px",
		bottom:"0px",
		padding:"10px",
		color:"rgba(0,0,0,0.5)",
		letterSpacing:"1px",
		textTransform:"uppercase",
		fontSize:"12px",
		display:"flex",
		justifyContent:"space-between"
	}
}


function ColorDiv (props){
	
	function handleDelete(){
		props.deleteColor(props.name)
	}
	
	const { classes } = props;

	return(<div className={classes.colorBox} 
			   style={{backgroundColor: props.backgroundColor}}
			   >
			<div className={classes.boxContent}>
				<span>{props.name}</span>
        		<DeleteForeverOutlinedIcon onClick={handleDelete}/>
			</div>
			
		</div>)
}

export default withStyles(styles)(ColorDiv);