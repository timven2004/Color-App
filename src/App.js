import './App.css';
import React, {Component} from "react";
import seedColors from "./seedColors.js"
import Palette from "./Palette.js"
import {generatePalette} from "./colorHelpers"


class App extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		console.log(generatePalette(seedColors[4]));

		return (
			<div>
			
				<Palette palatte={generatePalette(seedColors[4])}/>
			
			</div>
		
		)
	}
}

export default App;
