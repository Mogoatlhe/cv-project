import React, { Component } from "react";
import CvSocials from "./CvSocials";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FormField from "./FormField";

class CvBody extends Component{
    constructor(){
        super();

        this.state = {
            mail: {
                details: "email@service.co.za",
                label: "Email",
                name: "email",
                iconType: faEnvelopeOpenText,
                inputType: "email"
            },
            phone: {
                details: "678 - 999 - 8282",
                label: "Phone Number",
                name: "phone",
                iconType: faMobileRetro,
                inputType: "text"
            },
            location: {
                details: "City, Country",
                label: "Location",
                name: "location",
                iconType: faLocationDot,
                inputType: "text"
            },
            linkedin: {
                details: "moeketsi-mogoatlhe-6b7807194",
                label: "Linkedin",
                name: "linkedin",
                iconType: faLinkedin,
                inputType: "text"
            },
            github: {
                details: "mogoatlhe",
                label: "GitHub",
                name: "github",
                iconType: faGithub,
                inputType: "text"
            },
        }
    }

    render(){
        return(
            <div id = "cv-body">
                <div id = "cv-body-left">
                    <div id = "contact-details">
                        <CvSocials socials = { this.state.mail }/>
                        <CvSocials socials = { this.state.phone }/>
                        <CvSocials socials = { this.state.location }/>
                        <CvSocials socials = { this.state.linkedin }/>
                        <CvSocials socials = { this.state.github }/>
                    </div>
                    <div id = "blur"></div>
                </div>
                <div id = "cv-body-right"></div>
                <div id = "contact-details-form-container">
                    <p id = "contact-details-form-header">Contact Details</p>
                    <form>
                        <FormField formDetails = { this.state.mail }/>
                        <div id = "phone-location-container">
                            <FormField formDetails = { this.state.phone }/>
                            <FormField formDetails = { this.state.location }/>
                        </div>
                        <FormField formDetails = { this.state.linkedin }/>
                        <FormField formDetails = { this.state.github }/>
                    </form>
                </div>
            </div>
        );
    }
}

export default CvBody;