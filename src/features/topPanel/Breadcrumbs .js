import React from 'react';
import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { createUseStyles } from "react-jss";


export default function () {
    const styles = useStyles();

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            International
        </Link>,
        <Typography underline="hover" key="2" color="text.primary">
            Issue Boards
        </Typography>
    ];

    return (
        <Stack spacing={2} className={styles.cont}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    )
}

const useStyles = createUseStyles({
    cont: {
        alignSelf: "top",
        gridColumnStart: '1',
        gridColumnEnd: '3',
        padding: '13px 0 0 20px',
    },
});