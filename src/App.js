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


class App extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		console.log(generatePalette(seedColors[4]));

		function Child(){
			let {id}=useParams()
			return (
			<Palette palatte={generatePalette(seedColors[id])}/>)
		}
		
		return (
			
			<Switch>
			<Route exact path="/">
				<h1>App Under Construction and palette list goes here, type in URL as below to access this app, change the last number for changing color palettes:</h1>
					https://reactcourse-qkksa.run.goorm.io/palette/1
				
				
			</Route>
			<Route exact path="/palette/:id" >
				<Child/>
			</Route>
			</Switch>
			
			
		)
	}
}

export default App;
