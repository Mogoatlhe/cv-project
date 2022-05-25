import React, { Component } from "react";

class CvHeaderForm extends Component{

    render(){
        return(
            <form onSubmit = { this.props.handleInfoChange }>
                <label  id = { `${this.props.idProp}-label`}
                        className = "hidden"
                        htmlFor = { `${this.props.idProp}-input` }
                        >Name Surname: </label>
                <input  onChange = { this.props.handleInfoChange }
                        onBlur = { this.props.handleInfoChange }
                        type = "text" 
                        id = { `${this.props.idProp}-input` } 
                        className = "hidden" 
                        maxLength = { this.props.maxLength }
                        value = { this.props.currentValue }/>
            </form>
        );
    }
}

export default CvHeaderForm;