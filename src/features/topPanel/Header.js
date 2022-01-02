import React from "react";
import { createUseStyles } from "react-jss";


export default function DeskHeader() {
    const styles = useStyles();

    return (
        <div className={styles.cont}>
            <p className={styles.p}>Issue Boards</p>
        </div>
    )
}

const useStyles = createUseStyles({
    cont: {
        gridRowStart: '2',
        gridRowEnd: '3',
        gridColumnStart: '1',
        gridColumnEnd: '2',
        margin: '0 20px',
        alignSelf: "center",
        justifySelf: "flex-start",
        height: '32px',
    },
    p: {
        display: 'inline-block',
        lineHeight: '32px',
        color: '000',
        fontSize: '24px',
        fontWeight: '600',
        margin: 0,
    }, 
})