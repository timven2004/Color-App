import './App.css';
import React, {Component} from "react";
import seedColors from "./seedColors.js"
import Palette from "./Palette.js"
import {generatePalette} from "./colorHelpers"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		console.log(generatePalette(seedColors[4]));

		return (
			<Router>
			<div >
			
				<Palette palatte={generatePalette(seedColors[4])}/>
			
			</div>
			</Router>
			
		)
	}
}

export default App;
