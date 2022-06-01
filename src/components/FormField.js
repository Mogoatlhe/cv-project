import React, { Component } from "react";

class FormField extends Component{
    render(){
        return(
            <div className = "form-field">
                <label 
                    htmlFor = { `${this.props.formDetails.name}-input` }
                    id = { `${this.props.formDetails.name}-label` }
                > { this.props.formDetails.label } </label>
                <input
                    type = { this.props.formDetails.inputType }
                    id = { `${this.props.formDetails.name}-input` }
                    maxLength = "100"
                    value = { this.props.formDetails.details }
                    onChange = { this.props.toggleError }
                    required/>
                <p className = "hidden">{`Please provide a valid  ${this.props.formDetails.label}`}</p>
            </div>
        );
    }
}

export default FormField; 