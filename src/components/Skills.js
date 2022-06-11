import React, { Component } from "react";
import Skill from "./Skill";
import uniqid from "uniqid";

class Skills extends Component{

    constructor(){
        super();

        this.state = {
            skills: [{
                text: "Skill 1",
                key: uniqid(),
            }],
            skill: {
                text: "",
                key: uniqid(),
            },
            error: "",
        }

        this.edit = this.edit.bind(this);
    }

    displaySkills = () => {
        const skills = [];
        this.state.skills.forEach(skill => 
                skills.push(<Skill  key = { skill.key }
                                    text = { skill.text }
                                    edit = { this.edit }/>));
        return skills;
    }

    isDuplicate = (curr) => {
        let current;
        let length = this.state.skills.length;

        for(let i = 0; i < length; i++){

            if(curr === undefined){
                current = this.state.skills[i].text;
            }else{
                current = curr;
                if(current === this.state.skills[0].text){
                    throw new Error(`${current} already exists`);
                }
            }

            for(let j = 0; j < length; j++){
                if(j === i){
                    continue;
                }
                
                if(current === this.state.skills[j].text){
                    throw new Error(`${current} already exists`);
                }else if(current === "new skill"){
                    throw new Error(`cannot have "new skill" as a skill`);
                }
            }
        }
    }

    setSkillError = (message) => {
        this.setState({
            error: message
        });
    }

    add = () => { 

        if(document.querySelector("#skills-error").textContent.length > 0){
            return;
        }

        try{
            this.isDuplicate();
            const skill = {
                text: "new skill",
                key: uniqid(),
            }
    
            this.setState({
                skills: this.state.skills.concat(skill),
                error: "",
            });
        }catch(error){
            this.setSkillError(error.message);
        }
    }

    edit = (e) => {
        
        const skillInputs = document.querySelectorAll(".edit-skill");
        const textContent = e.target.value;
        const currInputIndex = [...skillInputs].findIndex(input => input === e.target);
        let tempArr = this.state.skills;

        try{
            this.isDuplicate(textContent);
            this.setSkillError("");
        }catch(error){
            this.setSkillError(error.message);
        }finally{
            tempArr[currInputIndex].text = textContent;
            this.setState({
                skills: tempArr
            });
        }
    }

    render(){
        return(
            <div id = "skills-container">
                <p id = "skills-category" className = "category-name">Skills</p>
                <p id = "skills-error">{ this.state.error }</p>
                <div id = "skills-list">
                    { this.displaySkills().map(skill => skill) }
                    <p  className = "skill" id = "skills-template"
                        onClick = { this.add }></p>
                </div>
            </div>
        );
    }
}

export default Skills;