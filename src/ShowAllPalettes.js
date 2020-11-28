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
	maxWidth: "100%",
	backgroundColor: "#34aaa8",
	backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%237F3' stroke-width='1' stroke-opacity='0.2'%3E%3Crect x='-40' y='40' width='75' height='75'/%3E%3Crect x='-35' y='45' width='65' height='65'/%3E%3Crect x='-30' y='50' width='55' height='55'/%3E%3Crect x='-25' y='55' width='45' height='45'/%3E%3Crect x='-20' y='60' width='35' height='35'/%3E%3Crect x='-15' y='65' width='25' height='25'/%3E%3Crect x='-10' y='70' width='15' height='15'/%3E%3Crect x='-5' y='75' width='5' height='5'/%3E%3Crect width='35' height='35'/%3E%3Crect x='5' y='5' width='25' height='25'/%3E%3Crect x='10' y='10' width='15' height='15'/%3E%3Crect x='15' y='15' width='5' height='5'/%3E%3Crect x='40' width='75' height='75'/%3E%3Crect x='45' y='5' width='65' height='65'/%3E%3Crect x='50' y='10' width='55' height='55'/%3E%3Crect x='55' y='15' width='45' height='45'/%3E%3Crect x='60' y='20' width='35' height='35'/%3E%3Crect x='65' y='25' width='25' height='25'/%3E%3Crect x='70' y='30' width='15' height='15'/%3E%3Crect x='75' y='35' width='5' height='5'/%3E%3Crect x='40' y='80' width='35' height='35'/%3E%3Crect x='45' y='85' width='25' height='25'/%3E%3Crect x='50' y='90' width='15' height='15'/%3E%3Crect x='55' y='95' width='5' height='5'/%3E%3Crect x='120' y='-40' width='75' height='75'/%3E%3Crect x='125' y='-35' width='65' height='65'/%3E%3Crect x='130' y='-30' width='55' height='55'/%3E%3Crect x='135' y='-25' width='45' height='45'/%3E%3Crect x='140' y='-20' width='35' height='35'/%3E%3Crect x='145' y='-15' width='25' height='25'/%3E%3Crect x='150' y='-10' width='15' height='15'/%3E%3Crect x='155' y='-5' width='5' height='5'/%3E%3Crect x='120' y='40' width='35' height='35'/%3E%3Crect x='125' y='45' width='25' height='25'/%3E%3Crect x='130' y='50' width='15' height='15'/%3E%3Crect x='135' y='55' width='5' height='5'/%3E%3Crect y='120' width='75' height='75'/%3E%3Crect x='5' y='125' width='65' height='65'/%3E%3Crect x='10' y='130' width='55' height='55'/%3E%3Crect x='15' y='135' width='45' height='45'/%3E%3Crect x='20' y='140' width='35' height='35'/%3E%3Crect x='25' y='145' width='25' height='25'/%3E%3Crect x='30' y='150' width='15' height='15'/%3E%3Crect x='35' y='155' width='5' height='5'/%3E%3Crect x='200' y='120' width='75' height='75'/%3E%3Crect x='40' y='200' width='75' height='75'/%3E%3Crect x='80' y='80' width='75' height='75'/%3E%3Crect x='85' y='85' width='65' height='65'/%3E%3Crect x='90' y='90' width='55' height='55'/%3E%3Crect x='95' y='95' width='45' height='45'/%3E%3Crect x='100' y='100' width='35' height='35'/%3E%3Crect x='105' y='105' width='25' height='25'/%3E%3Crect x='110' y='110' width='15' height='15'/%3E%3Crect x='115' y='115' width='5' height='5'/%3E%3Crect x='80' y='160' width='35' height='35'/%3E%3Crect x='85' y='165' width='25' height='25'/%3E%3Crect x='90' y='170' width='15' height='15'/%3E%3Crect x='95' y='175' width='5' height='5'/%3E%3Crect x='120' y='160' width='75' height='75'/%3E%3Crect x='125' y='165' width='65' height='65'/%3E%3Crect x='130' y='170' width='55' height='55'/%3E%3Crect x='135' y='175' width='45' height='45'/%3E%3Crect x='140' y='180' width='35' height='35'/%3E%3Crect x='145' y='185' width='25' height='25'/%3E%3Crect x='150' y='190' width='15' height='15'/%3E%3Crect x='155' y='195' width='5' height='5'/%3E%3Crect x='160' y='40' width='75' height='75'/%3E%3Crect x='165' y='45' width='65' height='65'/%3E%3Crect x='170' y='50' width='55' height='55'/%3E%3Crect x='175' y='55' width='45' height='45'/%3E%3Crect x='180' y='60' width='35' height='35'/%3E%3Crect x='185' y='65' width='25' height='25'/%3E%3Crect x='190' y='70' width='15' height='15'/%3E%3Crect x='195' y='75' width='5' height='5'/%3E%3Crect x='160' y='120' width='35' height='35'/%3E%3Crect x='165' y='125' width='25' height='25'/%3E%3Crect x='170' y='130' width='15' height='15'/%3E%3Crect x='175' y='135' width='5' height='5'/%3E%3Crect x='200' y='200' width='35' height='35'/%3E%3Crect x='200' width='35' height='35'/%3E%3Crect y='200' width='35' height='35'/%3E%3C/g%3E%3C/svg%3E")`,
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
	marginTop:"0px",
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
	margin:"25px",
	transition:"0.4s"
},
ListOfPalettesContainer:{
	display:"flex",
	flexFlow: "row wrap",
	justifyContent:"flex-start",

},

nav:{
	display:"flex",
	width:"100%",
	justifyContent:"space-between",
	textTransform:"Uppercase",
	alignItems:"center",
	flexFlow:"row",
	"@media (max-width:900px)":{
		flexFlow:"column",
		alignItems:"flex-start",
		justifyContent:"flex-start"
	},

	"& div":{
		padding:"8px",
		margin:"4px 30px",
		fontSize: "1.3rem",
			"@media (max-width:900px)":{
			alignItems:"center",
			margin:"0px"
			
		}

	},
	"& a":{
		textDecoration: "none",
		padding:"8px",
		margin:"4px 30px",
		fontSize: "1.3rem",
		color:"white",
	}
},
	twoButtons:{
		display: "flex",
		"& button":{
			marginLeft:"10px",
			"@media (max-width:900px)":{
				marginLeft:"0px"
			},
		},
		alignItems:"center",
		
		"@media (max-width:900px)":{
			alignItems:"stretch",
			margin:"0px",
			flexFlow:"column"
			
		}
	},
	

}



function ShowAllPalettes(props){
	
	const {classes} = props;
	const history = useHistory();
	
	
	return(
	<div className={classes.bodyOfPage}>
		
		<div className={classes.container}>
			<nav className={classes.nav}>
				<div>React Colors</div>
				<div className={classes.twoButtons}>
				<Link to="/palette/new" >
					<Button variant="contained" color="secondary" disableElevation>
 					 Create New Palette
					</Button>
				</Link>
					<Button variant="contained" color="primary" disableElevation onClick={props.seedingPalettes}>
 					 Reset Palettes
					</Button>
				</div>
			</nav>
			<div className={classes.ListOfPalettesContainer}>
				{props.existingPalettes.map((palette,index)=>(
				<div className={classes.eachItem}>
				<MiniPalette palette={palette} id={palette.id} handleClick={()=>(history.push(`/palette/${palette.id}`))} deletePalette={props.deletePalette} />
				</div>))}
			</div>
		</div>
	</div>
	)
}

export default withStyles(styles)(ShowAllPalettes);