import React, { Component } from "react";

class Skill extends Component{
    render(){
        return(
            <p className = "skill">{ this.props.text }</p>
        );
    }
}

export default Skill;