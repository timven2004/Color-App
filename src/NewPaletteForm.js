import React from "react";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import Button from "@material-ui/core/Button"
import ColorDiv from "./ColorDiv.js"
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DraggableColorList from "./DraggableColorList.js"
import arrayMove from 'array-move';
import {Link} from "react-router-dom"
import PaletteMetaForm from "./PaletteMetaForm.js"


const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
	  "& button":{
		margin:"2px",
		height:"50px"
	},
	  "& a":{
		  textDecoration:"none"
	  }
  },
	
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }
	),
	  display:"flex",
	  flexDirection:"row",
	  justifyContent: "space-between",
	  height:"64px",
	  alignItems:"center"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
	    display:"flex",
	  flexDirection:"row",
	  justifyContent: "space-between",
	  height:"64px"
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
	
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
	height:"calc(100vh - 64px)",
	width:"100vw",
	display:"flex",
	flexFlow: "row wrap",
	justifyContent:"flex-start",
	alignContent:"flex-start",
	marginTop:"64px",
	padding:"0px",

	  
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
	PaletteNameForm:{
		display:"flex",
		flexFlow:"row"
	},
	formBtn:{
		display:"flex",
		justifyContent:"space-between",
		alignItems:"center",
		flex:"1"
	},
	drawerContainer:{
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		flexFlow:"column",
		height:"90%"
	},
	colorPicker:{
		width:"95% !important",
		marginTop:"2rem"
	},
	addColorBtn:{
		width:"100%",
		marginTop:"10px !important",
		height:"100px !important",
		fontSize:"2rem"
	},
	ValidatorForm:{
		width:"90%",
		marginTop:"10px",
		display:"flex",
		justifyContent:"space-between",
		flexFlow:"column"
	},
	TextValidator:{
		width:"100%",
		marginBottom:"10px"
	},
	
	twoBtns:{
		marginTop:"10px",
		width:"90%"
	},
	
	saveAndGoBackButton:{
		display:"flex",
		
	}
	
});

class NewPaletteForm extends React.Component {
  
	constructor(props){
		super(props)
		this.state={
			open:true,
			currentColor: "teal",
			colors:[],
			newName:"",
			newPaletteName:"",
			PaletteMetaFormOpen:false,
			selectedEmoji:""
		};
		this.updateCurrentColor=this.updateCurrentColor.bind(this);
		this.updateNewName=this.updateNewName.bind(this);
		this.onSubmitForm=this.onSubmitForm.bind(this);
		this.handleNewPaletteNameSubmit=this.handleNewPaletteNameSubmit.bind(this);
		this.handleNewPaletteNameChange=this.handleNewPaletteNameChange.bind(this);
		this.deleteColor=this.deleteColor.bind(this);
		this.onSortEnd=this.onSortEnd.bind(this);
		this.clearColors=this.clearColors.bind(this);
		this.addRandomColor=this.addRandomColor.bind(this);
		this.addEmoji=this.addEmoji.bind(this);
	}
	
	state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

updateCurrentColor(newColor){
	this.setState({currentColor: newColor.hex})
}

updateNewName(event){
	this.setState({newName:event.target.value})
}

clearColors(){
	this.setState({colors:[]})
}

addRandomColor(){
	let randomCode = `#${Math.floor(16777216*Math.random()).toString(16).padStart(6,"0")}`;
	console.log(randomCode);
	this.setState({currentColor: randomCode,
				  newName: randomCode})
	
}

onSubmitForm(){
	const addColor ={color: this.state.currentColor,
					name: this.state.newName};
	this.setState({colors: [...this.state.colors, addColor],
				  newName: ""});
}

    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('UniqueColorName', (value) => {
			let results = true;
            (this.state.colors.forEach((element)=>{
				if (element.name.toLowerCase()==value.toLowerCase()){results = false}
			}))
			return results})
		
		ValidatorForm.addValidationRule('UniqueColorCode', (value) => {
			let results = true;
            (this.state.colors.forEach((element)=>{
				if (element.color==this.state.currentColor){results = false}
			}))
			return results})
		
		ValidatorForm.addValidationRule('UniquePaletteName', (value) => {
			let results = true;
            (this.props.existingPalettes.forEach((element)=>{
				if (element.paletteName.toLowerCase()==this.state.newPaletteName.toLowerCase()){results = false}
			}))
			return results})
	}


handleNewPaletteNameChange(event){
	this.setState({newPaletteName: event.target.value});
}

handleNewPaletteNameSubmit(){
	this.setState({PaletteMetaFormOpen: !this.state.PaletteMetaFormOpen})
	let newPaletteName = this.state.newPaletteName;
	const newPalette={
		paletteName: newPaletteName,
		colors: this.state.colors,
		id: newPaletteName.toLowerCase().replace(" ","-"),
	    emoji: this.state.selectedEmoji,

	}
	this.props.savePalette(newPalette);
	this.props.history.push("/");
	
}

deleteColor(toBeDeleted){
	this.setState(state=>({colors: state.colors.filter(color=>(color.name !==toBeDeleted))}))
}

onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

addEmoji(selected){
	console.log(selected)
	this.setState({selectedEmoji: selected.native})
}

  render() {
    const { classes } = this.props;
    const { open } = this.state;
	  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
			color="default"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            
          </Toolbar>
			<div className={classes.formBtn}>
			<Typography variant="h6" color="inherit" noWrap>
              Create your palette
            </Typography>
			{/*<ValidatorForm className={classes.PaletteNameForm} onSubmit={this.handleNewPaletteNameSubmit}>
				 <TextValidator
                    label="New Palette Name"
                    onChange={this.handleNewPaletteNameChange}
                    name="newPaletteName"
                    value={this.state.newPaletteName}
                    validators={['required',"UniquePaletteName"]}
                    errorMessages={['this field is required',"Palette name used"]}
                />
				<Button variant="contained" color="primary" type="Submit">Save Palette</Button>*/}
			<div className={classes.saveAndGoBackButton}>
			<PaletteMetaForm 
					existingPalettes={this.props.existingPalettes}
					handleNewPaletteNameSubmit={this.handleNewPaletteNameSubmit}
					handleNewPaletteNameChange={this.handleNewPaletteNameChange}
					history={this.props.history}
					newPaletteName={this.state.newPaletteName}
					addEmoji={this.addEmoji}
					selectedEmoji={this.state.selectedEmoji}
/>
			<Link to="/">
			 <Button variant="contained" color="secondary">Go Back</Button>
			</Link>
			</div>
			{/*</ValidatorForm >*/}
			</div>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <Divider />
			<div className={classes.drawerContainer}>
			<Typography variant="h4">
				Design Your Palette
			</Typography>
			<div className={classes.twoBtns}>
			<Button variant="contained" color="secondary" onClick={this.clearColors} style={{width: "100%"}}>
				Clear Palette
			</Button>
			<Button variant="contained" color="primary" onClick={this.addRandomColor} style={{width: "100%"}}>
				Random Color
			</Button>
				</div>

		<ChromePicker color={ this.state.currentColor } onChange={this.updateCurrentColor } onChangeComplete={this.updateCurrentColor} disableAlpha={true} className={classes.colorPicker}/>
			<ValidatorForm onSubmit={this.onSubmitForm} className={classes.ValidatorForm}>
				<TextValidator                     
					label="New color name"
                    onChange={this.updateNewName}
                    name="newColorName"
                    value={this.state.newName}
                    validators={['required',"UniqueColorName","UniqueColorCode"]}
                    errorMessages={['this field is required',"Color name has been used","Same color has been entered"]}
					className={classes.TextValidator}
					/>
				<Button type="submit" 
					variant="contained" 
					color="primary" 
					style={this.state.colors.length>=20? {backgroundColor:"grey"}: {backgroundColor: this.state.currentColor}} disabled={this.state.colors.length>=20}
					className={classes.addColorBtn}>
					{this.state.colors.length>=20? "Palette full": "Add Color"}
				</Button>
			</ValidatorForm>
			</div>

        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
			
			{/*{this.state.colors.map((color)=>(<ColorDiv backgroundColor={color.color} name={color.name} deleteColor={this.deleteColor}/>))}*/}
			<DraggableColorList 
				colorList={this.state.colors} 
				deleteColor={this.deleteColor}
				axis="xy"
				onSortEnd={this.onSortEnd}/>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
