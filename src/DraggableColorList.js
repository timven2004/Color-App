import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import ColorDiv from "./ColorDiv.js"

const SortableItem = SortableElement(({value, deleteColor}) => (<ColorDiv backgroundColor={value.color} name={value.name} deleteColor={deleteColor}/>));

const SortableList = SortableContainer(({colorList, deleteColor}) => {
  return (
    <div style={{height:"100%", width:"100%", display:"flex", flexFlow:"row wrap", justifyContent:"flex-start",alignContent:"flex-start",
}}>
      {colorList.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} deleteColor={deleteColor}/>
      ))}
    </div>
  );
});

// class SortableComponent extends Component {
// constructor(props){
// 	super(props);
// }

//   render() {
//     return <SortableList items={this.props.colorList} 
// 			   deleteColor={this.props.deleteColor} 
// 			   onSortEnd={this.props.onSortEnd} />;
//   }
// }

export default SortableList;