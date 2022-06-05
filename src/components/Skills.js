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
            }
        }
    }

    displaySkills = () => {
        const skills = [];
        this.state.skills.forEach(skill => 
                skills.push(<Skill key = { skill.key } text = { skill.text }/>));
        return skills;
    }

    edit = () => {

    }

    render(){
        return(
            <div id = "skills-container">
                <p id = "skills-category" className = "category-name">Skills</p>
                <div id = "skills-list">
                    { this.displaySkills().map(skill => skill) }
                    <p className = "skill" id = "skills-template"></p>
                </div>
            </div>
        );
    }
}

export default Skills;