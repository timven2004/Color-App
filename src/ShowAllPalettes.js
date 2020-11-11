import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import MiniPalette from "./MiniPalette.js"

function ShowAllPalettes(props){
	  
	
	return(
	<div>
		<h1>App Under Construction and palette list goes here:</h1>
			{props.existingPalettes.map((palette,index)=>(
				<Link to={`/palette/${index}`}>
				<p>Go to palette {palette.id}</p>
				<MiniPalette palette={palette}/>
				</Link>))}
	</div>
	)
}

export default ShowAllPalettes;