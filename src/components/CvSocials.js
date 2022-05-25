import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CvSocials extends Component{
    render(){
        return(
            <div id = "cv-socials-container">
                <div id = "icon-container">
                    <FontAwesomeIcon icon={ this.props.socials.iconType } />
                </div>
                <p className = "cv-social-details"> { this.props.socials.details }</p>
            </div>
        );
    }
}

export default CvSocials;