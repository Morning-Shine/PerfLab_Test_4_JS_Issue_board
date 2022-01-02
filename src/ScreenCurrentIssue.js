import React from "react";
import { createUseStyles } from "react-jss";
import Breadcrumbs from "./features/currentIssue/Breadcrumbs ";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import showPriorityImg from "./supportFunctions/showPriorityImg";
import CurrentTaskImg from "./features/currentIssue/CurrentTaskImg";



export default function ScreenCurrentIssue() {
    const styles = useStyles();
    const { taskId } = useParams();
    const currentTask = useSelector(state => state.tasks.tasksArray.find(task => task.taskId == taskId));
    let boardName;
    switch (currentTask.status) {
        case 'todo': boardName = 'TO DO';
            break;
        case 'in_progress': boardName = 'IN PROGRESS';
            break;
        case 'test': boardName = 'TEST';
            break;
        case 'done': boardName = 'DONE';
            break;
    }

    return (
        <div className={styles.cont}>
            <Breadcrumbs
                taskId={currentTask.taskId}
                title={currentTask.title}
            />
            <div>
                <h1 className={styles.h1}>
                    {currentTask.taskId}: {currentTask.title}
                </h1>
                <div className={styles.labels}>
                    <div className={styles.img}>
                        <CurrentTaskImg
                            priority={currentTask.priority}
                        />
                    </div>
                    <div className={styles.storyPoints}>
                        {currentTask.storyPoints}
                    </div>
                    <div className={styles.boardName}>
                        {boardName}
                    </div>
                </div>
                <p className={styles.p}>
                    {currentTask.content}
                </p>
            </div>

        </div>
    )
}

const useStyles = createUseStyles({
    cont: {
        height: '100vh',
        width: '100vw',
    },
    h1: {
        marginLeft: '22px',
        marginBottom: '24px',
        lineHeight: '32px',
        fontSize: '24px',
        fontWeight: '600',
    },
    p: {
        color: '#6E7C87',
        fontSize: '18px',
        paddingLeft: '22px',
    },
    labels: {
        paddingLeft: '22px',
        display: "flex",
        flexDirection: 'row',
        marginBottom: '52px',
        width: '200px',
    },
    storyPoints: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#252C32',
        backgroundColor: '#E5E9EB',
        borderRadius: '12px',
        width: '25px',
        height: '24px',
        lineHeight: '24px',
        textAlign: "center",
        marginLeft: '8px',
        marginRight: '13px',
    },

    img: {
        paddingLeft: '6px',
    },
    boardName: {
        color: '#6E7C87',
        fontSize: '14px',
        lineHeight: '24px',
    }
})