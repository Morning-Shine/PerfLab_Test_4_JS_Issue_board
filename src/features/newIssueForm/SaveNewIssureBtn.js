import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTask } from "../lists/tasksHandlerSlice";
import randomTaskId from "../../supportFunctions/randomTaskId";


export function SaveNewIssureBtn(props) {
    const [popupVisible, setPopupVisible] = useState(false);
    const styles = useStyles();
    const dispatch = useDispatch();
    const newTask = {
        taskId: randomTaskId(),
        status: props.status,
        priority: props.priority,
        storyPoints: props.storyPoints,
        title: props.title,
        content: props.description,
    }
    const addNewTask = () => {
        dispatch(addTask(newTask));
        setPopupVisible(true);
    }

    const popup = popupVisible
        ? <div className={styles.popup} hidden={popupVisible}>
            <p className={styles.popup_p}>Задача успешно добавлена на доску</p>
        </div>
        : null

    return (
        <>
            <div className={styles.cont} onClick={addNewTask}>
                <div className={styles.btn}>
                    <p className={styles.p_btn}>Save issue</p>
                </div>
                {popup}
            </div>
        </>
    )
}

export function SaveNewIssureBtnDisabled() {
    const styles = useStyles();
    return (
        <div className={styles.cont}>
            <div className={styles.btn_dis}>
                <p className={styles.p_btn}>Save issue</p>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    cont: {
        alignSelf: "center",
        marginTop: '22px',
        marginLeft: '22px',
        width: '535px',
        justifyContent: "space-between",
        display: "flex",
    },
    link: {
        textDecoration: 'none',
        display: 'block',
        height: '32px',
        width: '93px',
    },
    btn: {
        background: '#4094F7',
        height: '32px',
        width: '93px',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    btn_dis: {
        background: '#d2e6fd',
        height: '32px',
        width: '93px',
        borderRadius: '6px',
        cursor: 'not-allowed',
    },
    p_btn: {
        color: '#F6F8F9',
        fontSize: '14px',
        fontWeight: '600',
        margin: '0',
        lineHeight: '32px',
        textAlign: "center",
    },
    popup: {
        position: 'absolute',
        borderRadius: '6px',
        top: '20px',
        left: '20px',
        width: '580px',
        height: '350px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center"
    },
    popup_p: {
        margin: '0',
        fontSize: '30px',
    }
});