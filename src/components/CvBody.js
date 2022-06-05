import React, { Component } from "react";
import CvSocials from "./CvSocials";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FormField from "./FormField";
import Skills from "./Skills";

class CvBody extends Component{
    constructor(){
        super();

        this.state = {
            email: {
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
            }
        }

        this.blur = null;
        this.formContainer = null;

        this.toggleSocialsError = this.toggleSocialsError.bind(this);
    }

    togglePopUp = () => {
        this.blur = document.getElementById("blur");
        this.formContainer = document.getElementById("contact-details-form-container");

        this.blur.classList.toggle("hidden");
        this.formContainer.classList.toggle("hidden");
    }

    toggleSocialsError = (e) => {
        const currInput = e.target;
        let id = currInput.id;
        id = id.substring(0, id.length - 6);
        const stateKeys = Object.keys(this.state);
        let currKey = stateKeys.find(key => key === id);

        this.setState({
            [currKey]: {
                details: currInput.value,
                label: this.state[currKey].label,
                name: this.state[currKey].name,
                iconType: this.state[currKey].iconType,
                inputType: this.state[currKey].inputType
            }
        });
    }

    render(){
        return(
            <div id = "cv-body">
                <div id = "cv-body-left">
                    <div id = "contact-details" onClick = { this.togglePopUp }>
                        <CvSocials socials = { this.state.email }/>
                        <CvSocials socials = { this.state.phone }/>
                        <CvSocials socials = { this.state.location }/>
                        <CvSocials socials = { this.state.linkedin }/>
                        <CvSocials socials = { this.state.github }/>
                    </div>
                    <Skills />
                    <div id = "blur" className = "hidden" onClick = { this.togglePopUp }></div>
                </div>
                <div id = "cv-body-right"></div>
                <div id = "contact-details-form-container" className = "hidden">
                    <p id = "contact-details-form-header">Contact Details</p>
                    <form>
                        <FormField
                            formDetails = { this.state.email }
                            toggleError =  { this.toggleSocialsError }/>
                        <div id = "phone-location-container">
                            <FormField 
                                formDetails = { this.state.phone }
                                toggleError =  { this.toggleSocialsError }/>
                            <FormField 
                                formDetails = { this.state.location }
                                toggleError =  { this.toggleSocialsError }/>
                        </div>
                        <FormField 
                            formDetails = { this.state.linkedin }
                            toggleError =  { this.toggleSocialsError }/>
                        <FormField
                            formDetails = { this.state.github }
                            toggleError =  { this.toggleSocialsError }/>
                    </form>
                </div>
            </div>
        );
    }
}

export default CvBody;