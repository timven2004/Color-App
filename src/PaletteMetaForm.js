import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';


const styles = {	
	
	PaletteNameForm:{
		display:"flex",
		flexFlow:"column"
	},
	lineBreak:{
		marginTop:"8px",
		marginLeft:"-8px",
	enterButton:{
			marginLeft:"10px !important"
		}
	},
	textField:{
		length:"100%"
	},
	emojiMart:{
		margin:"10px 0px",
		height:"50%"
		
	},
	emojiDisplay:{
		margin: "10px 0px"
	}
}

class PaletteMetaForm extends React.Component {
  constructor(props){
	  super(props)
	  this.state={
		  open:false,
	  }
	  this.handleClickOpen=this.handleClickOpen.bind(this);
	  this.handleClose=this.handleClose.bind(this);
  }

   handleClickOpen(){
    this.setState({open:true});
  };

  handleClose () {
    this.setState({open:false});
  };

  componentDidMount() {
        // custom rule will have name 'isPasswordMatch'

		
		ValidatorForm.addValidationRule('UniquePaletteName', (value) => {
			let results = true;
            (this.props.existingPalettes.forEach((element)=>{
				if (element.paletteName.toLowerCase()==this.state.newPaletteName.toLowerCase()){results = false}
			}))
			return results})
	}	
	



	
	render(){
	const { classes } = this.props;

		
  return (
	  
    <div>
      <Button color="primary" variant="contained" onClick={this.handleClickOpen}>
        Save Palette
      </Button>
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Palette</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter palette name, make sure it is unique. 
			<br/>And Also pick an emoji.
          </DialogContentText>
         <ValidatorForm className={classes.PaletteNameForm} onSubmit={this.props.handleNewPaletteNameSubmit}>
				 <TextValidator
                    label="New Palette Name"
                    onChange={this.props.handleNewPaletteNameChange}
                    name="newPaletteName"
                    value={this.props.newPaletteName}
                    validators={['required',"UniquePaletteName"]}
                    errorMessages={['this field is required',"Palette name used"]}

                />
			 	<div className={classes.emojiDisplay}>Slelected Emoji: {this.props.selectedEmoji}</div>
			 		<div className={classes.emojiMart}>
			 		<Picker set='apple' title='Pick your emoji…'onSelect={this.props.addEmoji}/>
					</div>

		<div className={classes.lineBreak}>
		 <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button type="Submit" variant="contained" color="primary" className={classes.enterButton}>
            Enter
          </Button>
		</div>
			</ValidatorForm>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>

      </Dialog>
	
    </div>
  );
}
}



export default withStyles(styles)(PaletteMetaForm);