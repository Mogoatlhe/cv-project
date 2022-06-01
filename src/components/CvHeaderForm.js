import React, { Component } from "react";

class CvHeaderForm extends Component{

    render(){
        return(
            <form onSubmit = { this.props.handleInfoChange }>
                <label  id = { `${this.props.object.id}-label`}
                        className = "hidden"
                        htmlFor = { `${this.props.object.id}-input` }
                        > {`${this.props.object.label}`} </label>
                <input  onKeyDown = { this.props.detectAltKeys }
                        onChange = { this.props.handleInfoChange }
                        onBlur = { this.props.handleInfoChange }
                        type = "text" 
                        id = { `${this.props.object.id}-input` } 
                        className = "hidden" 
                        maxLength = { this.props.object.maxLength }
                        value = { this.props.currentValue }/>
            </form>
        );
    }
}

export default CvHeaderForm;