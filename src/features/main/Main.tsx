import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FintLogo from "../../images/fint-by-vigo-white.svg";
import {createStyles, makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        logo: {
            width: 86,
            marginRight: theme.spacing(4),
            marginBottom: theme.spacing()
        },
    }));

function Main() {
    const classes = useStyles();
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar>
                <Toolbar>
                    <img src={FintLogo} alt="logo" className={classes.logo}/>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Kontroll
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Main;



