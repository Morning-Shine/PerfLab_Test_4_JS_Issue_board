import React from "react";
import showPriorityImg from "../../supportFunctions/showPriorityImg";
import priorityCritical from '../../img/priorityCritical.png'
import priorityMajor from '../../img/priorityMajor.png'
import priorityNormal from '../../img/priorityNormal.png'
import priorityMinor from '../../img/priorityMinor.png'
import priorityUndefined from '../../img/priorityUndefined.png'



export default function ({ priority }) {
    let taskImg;
    switch(priority){
        case 'critical': taskImg = priorityCritical;
        break;
        case 'major': taskImg = priorityMajor;
        break;
        case 'normal': taskImg = priorityNormal;
        break;
        case 'minor': taskImg = priorityMinor;
        break;
        case 'undefined': taskImg = priorityUndefined;
        break;
    }

    return (
        <img src={taskImg} />
    )
}