import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import List from './List';
import { changeTask } from "./tasksHandlerSlice";


//TODO передавать не константой, изменить принимаемый аргумент функции tableColumn
const lists = [
    {
        id: 'tl1',
        name: 'TO DO',
        alias: 'todo',
    },
    {
        id: 'tl2',
        name: 'IN PROGRESS',
        alias: 'in_progress',
    },
    {
        id: 'tl3',
        name: 'TEST',
        alias: 'test',
    },
    {
        id: 'tl4',
        name: 'DONE',
        alias: 'done',
    },
]

export default function ListContainer(/*lists*/{searchInputValue}) {
    const [currentTask, setCurrentTask] = useState('');
    const [targetBoardName, setTargetBoardName] = useState(null);

    const styles = useStyles();

    let tasks = useSelector(state => state.tasks.tasksArray);
    let filterSearch = searchInputValue;
     console.log('filterSearch', filterSearch);
    
    if (filterSearch) {
         tasks = tasks.filter(task => {
            return (task.taskId.toLowerCase().includes(filterSearch.toLowerCase())
            || task.title.toLowerCase().includes(filterSearch.toLowerCase()))
        })
    }

    const dispatch = useDispatch();
    const changeTaskStatus = () => dispatch(changeTask({ currentTask, targetBoardName }));

    useEffect(() => {
        if (currentTask && targetBoardName) {
            changeTaskStatus({ currentTask, targetBoardName });
            setCurrentTask('');
            setTargetBoardName(null);
        }
    })


    let boardsList = lists;//тут будет state или переменная?
    return (
        <div className={styles.container}>
            {
                boardsList.map(board =>
                    <List
                        key={board.id}
                        header={board.name}
                        tasks={tasks.filter(task => task.status == board.alias)}
                        board={board}
                        setCurrentTask={setCurrentTask}
                        setTargetBoardName={setTargetBoardName}
                    />)
            }
        </div>
    )

}

const useStyles = createUseStyles({
    container: {
        gridRowStart: '4',
        gridRowEnd: '5',
        gridColumnStart: '1',
        gridColumnEnd: '3',
        padding: '0 0 52px 0',
        marginLeft: '16px',
        marginRight: '13px',
        display: "grid",
        gridColumnGap: '10px',
        gridTemplateColumns: 'repeat(4, 1fr)',
    }
})

