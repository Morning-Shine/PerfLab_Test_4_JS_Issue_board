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
        <Link underline="hover" key="2" color="inherit"  href="/">
            Issue Boards
        </Link>,
        <Typography underline="hover" key="2" color="text.primary">
            New Issue
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
        padding: '13px 0 0 20px',
        position: 'absolute',
        top: 0
    },
});