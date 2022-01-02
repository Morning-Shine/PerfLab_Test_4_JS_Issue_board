import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import ListContainer from "./features/lists/ListsContainer";
import Breadcrumbs from "./features/topPanel/Breadcrumbs ";
import DeskHeader from "./features/topPanel/Header";
import NewIssueBtn from "./features/topPanel/NewIssueBtn";
import SearchIssue from "./features/topPanel/SearchIssue";
import Foo from "./Foo";


export default function ScreenIssueBoards(props) {
    const styles = useStyles();
    const [searchInputValue, setSearchInputValue] = useState('');

    return (
        <div className={styles.container}>
            <Breadcrumbs/>
            {/* <Foo/> */}
            <DeskHeader/>
            <NewIssueBtn/>
            {/* <Foo/> */}
            <SearchIssue setSearchInputValue={setSearchInputValue}/>
            <ListContainer searchInputValue={searchInputValue}/>
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
        gridTemplateRows: '5vh 7vh 8vh 80vh',
        gridTemplateColumns: '185px auto',
        gridTemplateAreas: "breadcrumbs breadcrumbs header newTask search search todo todo"
        //border: 'red 2px solid',
    }
})