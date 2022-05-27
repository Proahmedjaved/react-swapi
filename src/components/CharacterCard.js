import * as React from 'react';
import { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CharacterSummary = (props) => {
    return (
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            Height: {props.height}<br />
            Mass: {props.mass}<br />
            Gender: {props.gender}<br />
        </Typography>
    )
}

export default function CharacterCard(props) {
    const [showDetail, setShowDetail] = useState(false)
    return (
        <Card sx={{ minWidth: 275 }}>
            <Item>
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                        {props.name}
                    </Typography>
                    {showDetail && <CharacterSummary {...props} />}
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small" onClick={() => setShowDetail(!showDetail)}>{showDetail ? "Hide Detail" : "Show detail"}</Button>
                </CardActions>
            </Item>
        </Card>
    );
}
