// App.jsx > Body.jsx > Main.jsx > _project-name_.jsx > ProjectNav.jsx

// react
import React from 'react';

export default function ProjectNav({projectObj}){
    // destructuring
    let {title, repoURL, siteURL, stackObj} = projectObj;

    return(
        <div className="ProjectNav">
            {title !== "Matt Rocco Lucciola" && <a href="#Intro" className="home">Home</a>}
            <div className="title">{title}</div>
            <div className="urls">
                {repoURL && <a className="repoURL" href={repoURL}>GitHub</a>}
                {siteURL && <a className="siteURL" href={siteURL}>Website</a>}
            </div>
        </div>
    )
}