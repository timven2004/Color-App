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
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem("existingPalettes"));
		this.state={
			existingPalettes: savedPalettes||seedColors
		}
		this.savePalette=this.savePalette.bind(this);
		this.seedingPalettes=this.seedingPalettes.bind(this);
		
this.syncLocalStorage=this.syncLocalStorage.bind(this);
	}
	
	savePalette(newPalette){
		console.log(newPalette);
		this.setState((prevState)=>({existingPalettes: [...prevState.existingPalettes, newPalette]}),this.syncLocalStorage)
	}
	
	seedingPalettes(){
this.setState({existingPalettes:seedColors},this.syncLocalStorage);
	}
	
	syncLocalStorage(){
		window.localStorage.setItem("existingPalettes",JSON.stringify(this.state.existingPalettes))
	}
	
	render(){

		
		return (
			
			<Switch>
			<Route exact path="/">
				<ShowAllPalettes existingPalettes={this.state.existingPalettes} seedingPalettes={this.seedingPalettes}/>
			</Route>
				
			<Route exact path="/palette/new" 
				render={(routeProps)=>(
						<NewPaletteForm 
							savePalette={this.savePalette}
							existingPalettes={this.state.existingPalettes}
							{...routeProps}
							/>)}/>				
			
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
