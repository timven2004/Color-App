import React from "react";
import {
  useParams
} from "react-router-dom";
import {generatePalette} from "./colorHelpers";
import Palette from "./Palette.js"



function ShowingPalette(props){
	  let { id } = useParams();
	return(
	<Palette palette={generatePalette(props.existingPalettes.find((palette)=>(palette.id===id)))}/>
	
	)
}

export default ShowingPalette;