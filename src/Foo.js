import { createUseStyles } from "react-jss";


export default function Foo (props) {
    const styles = useStyles();
    return (
        <div className={styles.container}>

        </div>
    )

}

const useStyles = createUseStyles({
    container: {
        gridColumnStart: '1',
        gridColumnEnd: '3',
        padding: 0,
        margin: 0,
        background: '#DFCA9C',
    }
})

