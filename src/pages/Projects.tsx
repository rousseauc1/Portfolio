import { useState } from "react";
import ProjectCard from "../components/ProjectCard"
 


function Project() {
    
    return (

        <div>
            <div>
                <label>My Projects</label>
                <label>This includes both academic and also personal projects that showcase my work, in a personal
                    and also an academic / professional setting.
                </label>
            </div>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
        </div>
    )

}


export default Project;