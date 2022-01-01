import React from "react";
import reactDom from "react-dom";
import NewIssueForm from "./features/newIssueForm/NewIssueForm";
import Breadcrumbs from "./features/topPanel/Breadcrumbs ";
import Foo from "./Foo";
import { createUseStyles } from "react-jss";



export default function ScreenNewIssure() {
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