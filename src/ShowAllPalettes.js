import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import MiniPalette from "./MiniPalette.js"
import { withStyles } from '@material-ui/core/styles';


const styles ={
bodyOfPage:{
	display:"flex",
	flexFlow: "column",
	alignItems:"center",
	position: "relative",
	width:"100vw",
	height:"100vh"
},
	
container: {
	display:"flex",
	flexFlow: "row wrap",
	justifyContent:"center",
	width: "66.6%",
	maxWidth:"900px"
},
eachItem:{
	width: "300px",
	height: "30%",
	display: "flex",
	alignItems: "center",
	flexFlow: "column",
	textDecoration: "none",
},
	
}


function ShowAllPalettes(props){
	 
	const {classes} = props;
	
	return(
	<div className={classes.bodyOfPage}>
		<h1>App Under Construction and palette list goes here:</h1>
		<div className={classes.container}>
			{props.existingPalettes.map((palette,index)=>(
				<Link to={`/palette/${index}`} className={classes.eachItem}>
				<MiniPalette palette={palette}/>
				</Link>))}
		</div>
	</div>
	)
}

export default withStyles(styles)(ShowAllPalettes);