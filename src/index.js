import ReactDOM from 'react-dom/client';
import { React } from 'react';
import { App } from './App';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Box sx={{
            width: "100%",
            height: 100,
            borderRadius: 2,
            textAlign: "center",
            margin: "auto"
        }}>
            <Typography variant='h3'>Star Wars API Integration</Typography>
        </Box>

        <App>
        </App >
    </div>
);
