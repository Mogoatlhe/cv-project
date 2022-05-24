import React, { Component } from "react";

class Header extends Component{
    render(){
        return (
            <header>
                <div id = "project-name">
                    <h2>CV Project</h2>
                </div>
                <div id = "hints">
                    <h3 id = "hints-title">
                        Hints:
                    </h3>
                    <div id = "hints-container">
                        <p className = "hint"> click on a field to edit it. </p>
                        <p className = "hint"> press "Enter" or click anywhere else to finish editing.</p>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;