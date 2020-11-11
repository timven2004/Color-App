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
	height:"100vh",
	backgroundColor: "blue",
	color:"white",
},
	
container: {
	display:"flex",
	flexFlow: "column",
	justifyContent:"flex-start",
	alignItems:"center",
	width: "66.6%",
	maxWidth:"900px"
},
eachItem:{
	width: "230px",
	height: "170px",
	display: "flex",
	alignItems: "center",
	flexFlow: "column",
	textDecoration: "none",
	backgroundColor:"white",
	border:"1px black solid",
	borderRadius:"5px",
	margin:"25px"
},
ListOfPalettesContainer:{
	display:"flex",
	flexFlow: "row wrap",
	justifyContent:"space-between",

},

nav:{
	display:"flex",
	width:"100%",
	justifyContent:"space-between",
	"& div":{
		padding:"8px",
		margin:"4px 30px",
		fontSize: "1.3rem",
		
	}
}

}


function ShowAllPalettes(props){
	 
	const {classes} = props;
	
	return(
	<div className={classes.bodyOfPage}>
		
		<div className={classes.container}>
			<nav className={classes.nav}>
				<div>React Colors</div>
				<div>Create new palette</div>
			</nav>
			<div className={classes.ListOfPalettesContainer}>
				{props.existingPalettes.map((palette,index)=>(
				<Link to={`/palette/${index}`} className={classes.eachItem}>
				<MiniPalette palette={palette}/>
				</Link>))}
			</div>
		</div>
	</div>
	)
}

export default withStyles(styles)(ShowAllPalettes);