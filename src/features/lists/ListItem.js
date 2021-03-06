import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import showPriorityImg from "../../supportFunctions/showPriorityImg";


export default function ListItem({ taskInfo, setCurrentTask }) {
    const styles = useStyles();
    const imgUrl = showPriorityImg(taskInfo.priority);
    console.log(imgUrl);

    let containerClassName = styles.container;

    return (
        <div
            className={containerClassName}
            draggable={true}
            onDragStart={() => dragStartHandler(taskInfo, setCurrentTask)}
        >
            <div className={styles.pDiv}>
                <Link
                    to={`/current_task/${taskInfo.taskId}`}
                    className={styles.link}
                >
                    <p className={styles.p}>
                        {taskInfo.title}
                    </p>
                </Link>
            </div>
            <div className={styles.taskFooter}>
                <img src={imgUrl} className={styles.img} />
                <div className={styles.divSpan}>
                    <span className={styles.span}>
                        {taskInfo.storyPoints}
                    </span>
                </div>
                <p className={styles.pTaskNumber}>
                    {taskInfo.taskId}
                </p>
            </div>
        </div>
    )
}

function dragStartHandler(task, setCurrentTask) {
    setCurrentTask(task)
}

const useStyles = createUseStyles({
    container: {
        margin: '8px',
        background: 'white',// TODO
       // background: '#DFCA9C',
        borderRadius: '6px',
        cursor: "grab",
    },
    containerTarget: {
        boxShadow: '0 4px 3px black',
    },
    img: {
        justifySelf: "center",
    },
    pDiv: {
        padding: '16px 16px 12px 16px',
    },
    p: {
        lineHeight: '20px',
        margin: 0,
    },
    link: {
        textDecoration: "none",
        color: '#252C32',

    },
    taskFooter: {
        display: 'grid',
        gridTemplateColumns: '25px 25px auto',
        gridTemplateRows: '24px',
        padding: '0 16px 16px 20px',
        alignItems: 'center',
    },
    divSpan: {
        backgroundColor: '#E5E9EB',
        borderRadius: '12px',
        width: '25px',
        height: '24px',
        textAlign: "center"
    },
    span: {
        fontSize: '14px',
        fontWeight: 600,
    },
    pTaskNumber: {
        fontSize: '14px',
        color: '#6E7C87',
        justifySelf: "end",
    }
});