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

    setEditInputSize = (e) => {
        this.editInput = e.target.nextSibling;
        this.editInput.style.width = this.editInput.value.length + "ch";
    }

    hideSkillInput = () => {
        this.skill.classList.remove("hidden");
        this.editInput.classList.add("hidden");
    }

    showSkillInput = (e) => {
        this.setEditInputSize(e);
        this.skill = this.editInput.previousSibling;
        this.skill.classList.add("hidden");
        this.editInput.classList.remove("hidden");
        this.editInput.focus();
    }

    saveSkill = (e) => {
        if(e.key === "Escape" || e.key === "Enter"){
            e.target.blur();
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
                <p onClick = { this.showSkillInput } className = "skill">{ this.state.value }</p>
                <input className = "edit-skill hidden"
                    type = "text"
                    value = { this.state.value }
                    style = {{ width: this.state.value.length + "ch" }}
                    onBlur = { this.hideSkillInput }
                    onChange = { this.edit }
                    onKeyDown = { this.saveSkill }
                    maxLength = "11"/>
            </React.Fragment>
        );
    }
}

export default Skill;