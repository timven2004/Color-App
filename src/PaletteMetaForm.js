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
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter palette name, make sure it is unique
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
			 
			 <Picker set='apple' />

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