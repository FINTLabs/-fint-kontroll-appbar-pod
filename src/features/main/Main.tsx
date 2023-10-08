import React, { useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { MessageBus } from '@podium/browser';

const Logo = styled('img')(({ theme }) => ({
    width: 86,
    marginRight: theme.spacing(4),
}));

function Main() {
    const theme = useTheme();
    const [username, setUsername] = useState<string>('');
    const messageBus = new MessageBus();

    messageBus.subscribe(
        'testChannel',
        'testTopic',
        (event) => {
            const user = event.payload;
            setUsername(user as string);
        }
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="relative">
                <Toolbar>
                    <Box sx={{
                        width: 86,
                        marginBottom: theme.spacing(),
                        marginRight: theme.spacing(4),
                    }}>
                        <Logo src="https://cdn.flais.io/media/fint-by-vigo-white.svg" alt="logo" />
                    </Box>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Kontroll
                    </Typography>
                    <Typography sx={{ marginRight: theme.spacing(2) }}>
                        username here {username}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Main;
