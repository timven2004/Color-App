import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import {generatePalette} from "./colorHelpers";
import Palette from "./Palette.js"



function ShowingPalette(props){
	  let { id } = useParams();
	return(
	<Palette palatte={generatePalette(props.existingPalettes[id])}/>
	
	)
}

export default ShowingPalette;