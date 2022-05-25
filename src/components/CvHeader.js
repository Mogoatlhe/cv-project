import React, { Component } from "react";
import CvHeaderForm from "./CvHeaderForm";

class CvHeader extends Component{

    constructor(){
        super();

        this.state = {
            name: "Name Surname",
            role: "Profession/Role",
            applicantDescr: "Brief one sentence description about yourself lorem lorem lorem lorem lorem lorem",
            picture: false,
        }

        this.nameSurname = null;
        this.nameSurnameInput = null;
        this.nameSurnameLabel = null;

        this.fields = {
            name: "name-surname"
        }

        this.handleHeaderInfoChange = this.handleHeaderInfoChange.bind(this);
    }

    editHeaderInfo = () => {
        this.nameSurname = document.getElementById("name-surname");
        this.nameSurnameInput = document.getElementById("name-surname-input");
        this.nameSurnameLabel = document.getElementById("name-surname-label");

        this.nameSurname.classList.add("hidden");
        this.nameSurnameInput.classList.remove("hidden");
        this.nameSurnameLabel.classList.remove("hidden");
        
        this.nameSurnameInput.focus();
    }

    hideInputField = () => {
        this.nameSurname.classList.remove("hidden");
        this.nameSurnameInput.classList.add("hidden");
        this.nameSurnameLabel.classList.add("hidden");
    }

    handleHeaderInfoChange = (e) => {
        e.preventDefault();

        if(e.target.value !== undefined){
            this.setState({
                name: e.target.value,
            });
        }else{
            this.hideInputField();
        }

        if(this.nameSurnameInput === document.activeElement){
            return;
        }

        this.hideInputField();
    }

    render(){
        return(
            <div id = "cv-header-container">
                <div id = "cv-header">
                    <div id = "cv-header-text">
                        <p  id = "name-surname"
                            onClick = { this.editHeaderInfo }
                        > { this.state.name } </p>
                        <CvHeaderForm 
                            idProp = { this.fields.name }
                            handleInfoChange = { this.handleHeaderInfoChange }
                            currentValue = { this.state.name }
                            maxLength = "26"/>
                        <p id = "role"> { this.state.role } </p>
                        <p id = "applicant-description"> { this.state.applicantDescr } </p>
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