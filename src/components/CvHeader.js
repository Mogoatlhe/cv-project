import React, { Component } from "react";
import CvHeaderForm from "./CvHeaderForm";

class CvHeader extends Component{

    constructor(){
        super();

        this.state = {
            name: "Name Surname",
            role: "Profession/Role",
            applicantDescr: "Brief one sentence description about yourself",
            picture: false,
        }

        this.key = null;
        this.field = null;
        this.input = null;
        this.label = null;
        this.isError = null;

        this.fields = {
            nameSurname: {
                id: "name-surname",
                maxLength: "26",
                label: "Name Surname: "
            },
            role: {
                id: "role",
                maxLength: "25",
                label: "Profession/Role: "
            },
            description: {
                id: "applicant-description",
                maxLength: "70",
                label: "Short Description: "
            }
        }

        this.handleHeaderInfoChange = this.handleHeaderInfoChange.bind(this);
        this.detectAltKeys = this.detectAltKeys.bind(this);
    }
    
    toggleErrorMessage = () => {
        const error = document.getElementById("cv-header-error");
        
        if(this.input.value.length < 1){
            error.classList.remove("hidden");
            return true;
        }
        error.classList.add("hidden");
        return false;
    }

    editHeaderInfo = (e) => {

        if(this.isError){
            return;
        }

        this.field = document.getElementById(e.target.id);
        this.input = document.getElementById(`${e.target.id}-input`);
        this.label = document.getElementById(`${e.target.id}-label`);

        this.field.classList.add("hidden");
        this.input.classList.remove("hidden");
        this.label.classList.remove("hidden");
        
        this.input.focus();
    }

    hideInputField = () => {
        this.field.classList.remove("hidden");
        this.input.classList.add("hidden");
        this.label.classList.add("hidden");
    }

    editRelevantField = (id, value) => {
        const idFirstFourChars = id.substring(0, 4);
        const stateKeys = Object.keys(this.state);
        const keysFirstFourChars = stateKeys.map(key => key.substring(0, 4));
        const matchingIdIndex = keysFirstFourChars.findIndex(key => key === idFirstFourChars);
        const currentField = stateKeys[matchingIdIndex];
        
        this.setState({
            [currentField]: value,
        })
    }

    handleHeaderInfoChange = (e) => {
        e.preventDefault();

        const value = e.target.value;
        this.isError = this.toggleErrorMessage();
        if(this.key !== "Enter" && this.key !== "Escape"){
            this.editRelevantField(e.target.id, value);
        }else{
            if(this.isError){
                return;
            }
            this.hideInputField();
        }

        if(this.input === document.activeElement || this.isError){
            return;
        }

        this.hideInputField();
    }

    detectAltKeys = (e) => {
        this.key = e.key;
    }

    render(){
        return(
            <div id = "cv-header-container">
                <p id = "cv-header-error" className = "hidden">Field cannot be blank</p>
                <div id = "cv-header">
                    <div id = "cv-header-text">
                        <p  id = "name-surname"
                            onClick = { this.editHeaderInfo }
                        > { this.state.name } </p>
                        <CvHeaderForm 
                            detectAltKeys = { this.detectAltKeys }
                            object = { this.fields.nameSurname }
                            handleInfoChange = { this.handleHeaderInfoChange }
                            currentValue = { this.state.name } />
                        <p  id = "role"
                            onClick = { this.editHeaderInfo }
                        > { this.state.role } </p>
                        <CvHeaderForm
                            object = { this.fields.role }
                            handleInfoChange = { this.handleHeaderInfoChange }
                            currentValue = { this.state.role } />
                        <p id = "applicant-description"
                            onClick = { this.editHeaderInfo }
                        > { this.state.applicantDescr } </p>
                        <CvHeaderForm
                            object = { this.fields.description }
                            handleInfoChange = { this.handleHeaderInfoChange }
                            currentValue = { this.state.applicantDescr } />
                    </div>
                    <div id = "profile-picture">
                        <p id = "drag-and-drop-text">drag &amp; drop</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default CvHeader;