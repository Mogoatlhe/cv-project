import React, { Component } from "react";

class Skill extends Component{

    constructor(props){
        super(props);

        this.state = {
            value: this.props.text
        }

        this.editInput = "null";
        this.skill = null;
    }

    setEditInputSize = () => {
        this.editInput = document.querySelector(".edit-skill");
        this.editInput.style.width = this.editInput.value.length + "ch";
    }

    toggleSkillVisibility = () => {
        this.setEditInputSize();
        this.skill = this.editInput.previousSibling;
        this.skill.classList.toggle("hidden");
        this.editInput.classList.toggle("hidden");

        if(this.skill.classList.contains("hidden")){
            this.editInput.focus();
        }
    }

    edit = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    render(){
        return(
            <React.Fragment>
                <p onClick = { this.toggleSkillVisibility } className = "skill">{ this.state.value }</p>
                <input className = "edit-skill hidden"
                    type = "text"
                    value = { this.state.value }
                    style = {{ width: this.state.value.length + "ch" }}
                    onClick = { this.toggleSkillVisibility }
                    onChange = { this.edit }
                    maxLength = "11"/>
            </React.Fragment>
        );
    }
}

export default Skill;