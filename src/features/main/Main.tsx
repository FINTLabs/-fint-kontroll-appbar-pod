import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {styled, useTheme} from '@mui/material/styles';
import { MessageBus } from '@podium/browser';
import {useEffect} from "react";


const Logo = styled('img')(({theme}) => ({
    width: 86,
    marginRight: theme.spacing(4)
}));


function Main() {
    const theme = useTheme();
    const messageBus = new MessageBus();
    const [username, setUsername] = React.useState('');

    useEffect(() => {
        messageBus.subscribe(
            'testChannel',
            'testTopic',
            (event) => {
                const user = event.payload;
                // @ts-ignore
                setUsername(user);
            })
    }, []);

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="relative">
                <Toolbar>
                    <Box sx={{
                        width: 86,
                        marginBottom: theme.spacing(),
                        marginRight: theme.spacing(4)
                    }}>
                        <Logo src="https://cdn.flais.io/media/fint-by-vigo-white.svg" alt="logo"
                             />
                    </Box>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Kontroll
                    </Typography>

                    <Typography variant="body1" sx={{ marginRight: theme.spacing(2) }}>
                        {username}
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Main;



