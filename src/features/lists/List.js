import React from "react";
import { createUseStyles } from "react-jss";
import ListItem from "./ListItem";



export default function List({ 
    tasks,
    board,
    header,
    setCurrentTask,
    setTargetBoardName,
 }) {
    const styles = useStyles();

    function dropHandler(event, board) {
        event.preventDefault();
        setTargetBoardName(board.alias);
    }
  
    return (
        <div
            className={styles.container}
            onDragOver={e => e.preventDefault()}
            onDrop={e => dropHandler(e, board)}
        >
            <p className={styles.header}>{header}</p>
            {tasks.map(task =>
                <ListItem
                    key={task.taskId}
                    taskInfo={task}
                    board={board.alias}
                    setCurrentTask={setCurrentTask}
                />)}
        </div>
    )

}

const useStyles = createUseStyles({
    container: {
        padding: 0,
        margin: 0,
        width: '100%',
        //background: '#8597A7',
        background: '#F6F8F9', //TODO поменять background
        borderRadius: '6px 6px 0px 0px',
        overflow: 'hidden',
    },
    header: {
        margin: '12px auto 8px 16px',
        color: '#6E7C87',
        fontWeight: '600',
        fontSize: '14px',
    }
})