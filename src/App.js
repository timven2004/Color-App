import './App.css';
import React, {Component} from "react";
import seedColors from "./seedColors.js"
import {
  Switch,
  Route,
} from "react-router-dom";
import ShowingPalette from "./ShowingPalette.js";
import ShowAllPalettes from "./ShowAllPalettes.js";
import SingleColorPalette from "./SingleColorPalette.js";
import NewPaletteForm from "./NewPaletteForm.js";

class App extends Component{
	constructor(props){
		super(props)
		this.state={
			existingPalettes: seedColors
		}
	}
	
	render(){

		
		return (
			
			<Switch>
			<Route exact path="/">
				<ShowAllPalettes existingPalettes={this.state.existingPalettes}/>
			</Route>
				
			<Route exact path="/palette/new">
				<NewPaletteForm/>
			</Route>	
			
			<Route exact path="/palette/:id">
				<ShowingPalette existingPalettes={this.state.existingPalettes}/>
			</Route>
			<Route exact path="/palette/:id/:colorName">
				<SingleColorPalette existingPalettes={this.state.existingPalettes}/>
			</Route>
		
			</Switch>
			
			
		)
	}
}

export default App;
