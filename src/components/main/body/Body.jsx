// react
import React from 'react';
// components
import Project from './project/Project';
import Progress from './progress/Progress';
import Intro from './Intro';
import BDA from './project/BDA';
import Diffuse from './project/Diffuse';
import BikeStar from './project/BikeStar';
import Cofi from './project/Cofi';
import {projectObjectsArr} from './projectObjectsArr'
// style
import './Body.css';

// main
export default function Body(){
    const buildProjectElems = (projectObjectsArr) => {
        return projectObjectsArr.map((projectObj, idx) => {
            return <Project projectObj={projectObj} key={`p-o-${idx}`} />
        })[2]
    }
    return(
        <div className="Body">
            <Progress />
            <Intro />
            {buildProjectElems(projectObjectsArr)}
            <BDA />
            <Diffuse />
            <BikeStar />
            <Cofi />
        </div>
    )
}