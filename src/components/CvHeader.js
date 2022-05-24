import React, { Component } from "react";

class CvHeader extends Component{

    render(){
        return(
            <div id = "cv-header-container">
                <div id = "cv-header">
                    <div id = "cv-header-text">
                        <p id = "name-surname">Name Surname</p>
                        <p id = "role">Proffesion/Role</p>
                        <p id = "applicant-description">Brief description about yourself lorem lorem lorem lorem lorem lorem</p>
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