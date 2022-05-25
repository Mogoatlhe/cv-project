import React, { Component } from "react";
import CvBody from "./CvBody";
import CvHeader from "./CvHeader";

class Cv extends Component{
    render(){
        return(
            <div id = "cv-container">
                <CvHeader />
                <CvBody />
            </div>
        );
    }
}

export default Cv;