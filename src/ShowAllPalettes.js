import React from "react";
import MiniPalette from "./MiniPalette.js"
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const styles ={
bodyOfPage:{
	display:"flex",
	flexFlow: "column",
	alignItems:"center",
	position: "relative",
	width:"100vw",
	height:"100%",
	minHeight:"100vh",
	backgroundImage: "url('/backgroundPicture.jpg')",
	backgroundColor: "grey",
	backgroundPosition: "center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	color:"white",
	
},
	
container: {
	display:"flex",
	flexFlow: "column",
	justifyContent:"flex-start",
	alignItems:"center",
	width: "66.6%",
	maxWidth:"900px",
	marginTop:"20px",
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
	textTransform:"Uppercase",
	alignItems:"center",

	"& div":{
		padding:"8px",
		margin:"4px 30px",
		fontSize: "1.3rem",
	},
	"& a":{
		textDecoration: "none",
		padding:"8px",
		margin:"4px 30px",
		fontSize: "1.3rem",
		color:"white",
	}
}

}



function ShowAllPalettes(props){
	
	const {classes} = props;
	const history = useHistory();

	return(
	<div className={classes.bodyOfPage}>
		
		<div className={classes.container}>
			<nav className={classes.nav}>
				<div>React Colors</div>
				<Link to="/palette/new" className>
					<Button variant="contained" color="secondary" disableElevation>
 					 Create New Palette
					</Button>
				</Link>
			</nav>
			<div className={classes.ListOfPalettesContainer}>
				{props.existingPalettes.map((palette,index)=>(
				<div className={classes.eachItem}>
				<MiniPalette palette={palette} handleClick={()=>(history.push(`/palette/${palette.id}`)
)}/>
				</div>))}
			</div>
		</div>
	</div>
	)
}

export default withStyles(styles)(ShowAllPalettes);