import React from "react";
import NewIssueForm from "./features/newIssueForm/NewIssueForm";
import { createUseStyles } from "react-jss";



export default function ScreenNewIssue() {
    const styles = useStyles();

    return (
        <div className={styles.cont}>
            <NewIssueForm />
        </div>
    )
}

const useStyles = createUseStyles({
    cont: {
        height: '100vh',
        width: '100vw',
        background: '#203563',
    }
})