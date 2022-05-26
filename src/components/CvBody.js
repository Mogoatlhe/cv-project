import React, { Component } from "react";
import CvSocials from "./CvSocials";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class CvBody extends Component{
    constructor(){
        super();

        this.contactInfo = {
            mail: {
                iconType: faEnvelopeOpenText,
                details: "email@service.co.za"
            },
            phone: {
                iconType: faMobileRetro,
                details: "678 - 999 - 8282"
            },
            location: {
                iconType: faLocationDot,
                details: "City, Country"
            },
            linkedin: {
                iconType: faLinkedin,
                details: "moeketsi-mogoatlhe-6b7807194"
            },
            github: {
                iconType: faGithub,
                details: "mogoatlhe"
            }
        };
    }

    render(){
        return(
            <div id = "cv-body">
                <div id = "cv-body-left">
                    <div id = "contact-details">
                        <CvSocials socials = { this.contactInfo.mail }/>
                        <CvSocials socials = { this.contactInfo.phone }/>
                        <CvSocials socials = { this.contactInfo.location }/>
                        <CvSocials socials = { this.contactInfo.linkedin }/>
                        <CvSocials socials = { this.contactInfo.github }/>
                    </div>
                    <div id = "blur"></div>
                </div>
                <div id = "cv-body-right"></div>
            </div>
        );
    }
}

export default CvBody;