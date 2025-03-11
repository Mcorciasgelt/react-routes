import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import projects from "../data/projects"

function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => (
                <li>
                    <p>{project.name}</p>
                    <p>{project.image}</p>
                    <p>{project.description}</p>
                </li>
                ))}
            </ul>
        </>
    )
}

export default Projects