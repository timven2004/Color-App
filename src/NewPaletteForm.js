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


const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
});

class NewPaletteForm extends React.Component {
  
	constructor(props){
		super(props)
		this.state={
			open:true,
			currentColor: "teal",
			colors:[],
			newName:"",
		};
		this.updateCurrentColor=this.updateCurrentColor.bind(this);
		this.updateNewName=this.updateNewName.bind(this);
		this.onSubmitForm=this.onSubmitForm.bind(this);
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
	
	}




  render() {
    const { classes } = this.props;
    const { open } = this.state;
	  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
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
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
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
			<Typography variant="h4">
				Design Your Palette
			</Typography>
			<div>
			<Button variant="contained" color="secondary">
				Clear Palette
			</Button>
			<Button variant="contained" color="primary">
				Random Color
			</Button>

			</div>

		<ChromePicker color={ this.state.currentColor } onChange={this.updateCurrentColor } onChangeComplete={this.updateCurrentColor} disableAlpha={true}/>
			<ValidatorForm onSubmit={this.onSubmitForm}>
				<TextValidator                     
					label="New color name"
                    onChange={this.updateNewName}
                    name="newColorName"
                    value={this.state.newName}
                    validators={['required',"UniqueColorName","UniqueColorCode"]}
                    errorMessages={['this field is required',"Color name has been used","Same color has been entered"]}
					/>
				<Button type="submit" variant="contained" color="primary" style={{backgroundColor: this.state.currentColor}}>
				Add Color
				</Button>
			</ValidatorForm>


        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
			
				{this.state.colors.map((color)=>(<ColorDiv backgroundColor={color.color} name={color.name}/>))}
			
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
