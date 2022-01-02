import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";



export default function NewIssueBtn() {
    const styles = useStyles();
    return (
        <nav className={styles.cont}>
            <Link to="/new_issue" className={styles.link}>
                <div className={styles.btn}>
                    <p className={styles.p_btn}>New issue</p>
                </div>
            </Link>
        </nav >
    )
}


const useStyles = createUseStyles({
    cont: {
        alignSelf: "center",
        gridRowStart: '2',
        gridRowEnd: '3',
    },
    link: {
        textDecoration: 'none',
    },
    btn: {
        background: '#F2994A',
        cursor: 'pointer',
        height: '32px',
        width: '93px',
        borderRadius: '6px',
        borderStyle: 'none',
    },
    p_btn: {
        color: '#F6F8F9',
        fontSize: '14px',
        fontWeight: '600',
        margin: '0',
        lineHeight: '32px',
        textAlign: "center",
    },
});