import './App.css';
import React, {Component} from "react";
import seedColors from "./seedColors.js"
import Palette from "./Palette.js"
import {generatePalette} from "./colorHelpers"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
	useParams
} from "react-router-dom";
import ShowingPalette from "./ShowingPalette.js";
import ShowAllPalettes from "./ShowAllPalettes.js"
import SingleColorPalette from "./SingleColorPalette.js"

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
