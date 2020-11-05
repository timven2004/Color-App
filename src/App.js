import './App.css';
import React, {Component} from "react";
import seedColors from "./seedColors.js"
import Palette from "./Palette.js"

class App extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return (
			<div>
			
				<Palette palatte={seedColors[4]}/>
			
			</div>
		
		)
	}
}

export default App;
