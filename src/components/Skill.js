import React, { Component } from "react";

class Skill extends Component{

    constructor(props){
        super(props);

        this.editInput = "null";
        this.skill = null;
    }

    setEditInputSize = (e) => {
        this.editInput = e.target.nextSibling;
        this.editInput.style.width = this.editInput.value.length + "ch";
    }

    hideSkillInput = () => {

        if(document.querySelector("#skills-error").textContent.length > 0){
            this.skill.click();
            return;
        }

        this.skill.classList.remove("hidden");
        this.editInput.classList.add("hidden");
    }

    showSkillInput = (e) => {

        if(document.querySelector("#skills-error").textContent.length > 0){
            const currentInput = document.querySelector(".edit-skill:not(.hidden)")
            if(currentInput !== null){
                currentInput.focus();
                return;
            }
        }

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

    render(){
        return(
            <React.Fragment>
                <p onClick = { this.showSkillInput } className = "skill">{ this.props.text }</p>
                <input className = "edit-skill hidden"
                    type = "text"
                    value = { this.props.text }
                    style = {{ width: this.props.text.length + "ch" }}
                    onBlur = { this.hideSkillInput }
                    onChange = { this.props.edit }
                    onKeyDown = { this.saveSkill }
                    maxLength = "11"/>
            </React.Fragment>
        );
    }
}

export default Skill;