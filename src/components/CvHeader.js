import React, { Component } from "react";

class CvHeader extends Component{

    constructor(){
        super();

        this.state = {
            name: "Name Surname",
            role: "Proffesion/Role",
            applicantDescr: "Brief description about yourself lorem lorem lorem lorem lorem lorem",
            picture: false,
        }
    }

    render(){
        return(
            <div id = "cv-header-container">
                <div id = "cv-header">
                    <div id = "cv-header-text">
                        <p id = "name-surname"> { this.state.name } </p>
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