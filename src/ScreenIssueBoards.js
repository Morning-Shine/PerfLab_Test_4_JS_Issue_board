import React from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import ListContainer from "./features/lists/ListsContainer";
import Breadcrumbs from "./features/topPanel/Breadcrumbs ";
import DeskHeader from "./features/topPanel/Header";
import NewIssureBtn from "./features/topPanel/NewIssureBtn";
import Foo from "./Foo";


export default function ScreenIssueBoards(props) {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            {/* <Breadcrumbs/> */}
            <Foo/>
            <DeskHeader/>
            <NewIssureBtn/>
            <Foo/>
            <ListContainer/>
            {/* <p>тут какой-то текст</p> */}
            {/* <nav>
                <Link to="/">ScreenIssueBoards</Link>
            </nav> */}
        </div>
    )
}

const useStyles = createUseStyles({
    container: {
        padding: 0,
        margin: 0,
        width: '100vw',
        height: '100vh',
        background: '#203563',
        display: 'grid',
        gridTemplateRows: 'repeat(3, auto) 76vh',
        gridTemplateColumns: '185px auto',
        gridTemplateAreas: "breadcrumbs breadcrumbs header newTask search search todo todo"
        //border: 'red 2px solid',
    }
})