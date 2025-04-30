import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectCard from "../components/ProjectCard"
import ProjectOne from "../pages/ProjectOne"

const Projects = () => {
    return (
        <div className="min-h-screen p-8">
            <div>
                <label>My Projects</label>
                <label>This includes both academic and also personal projects that showcase my work, in a personal
                    and also an academic / professional setting.
                </label>
            </div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />

            {/* <BrowserRouter>
                <Routes>
                    <Route path="/Projects" element={<Projects/>} />
                    <Route path="/Projects" element={<ProjectOne/>} />
                    <Route path="/Projects" element={<Projects/>} />
                    <Route path="/Projects" element={<Projects/>} />
                </Routes>
            </BrowserRouter> */}
        </div>
    )
}

export default Projects