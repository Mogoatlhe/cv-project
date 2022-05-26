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
                    maxLength = { this.props.formDetails.maxLength }
                    value = { this.props.formDetails.details }
                    readOnly/>
            </div>
        );
    }
}

export default FormField; 