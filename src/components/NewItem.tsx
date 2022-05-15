import React from 'react'
import {Typography, Stack, Rating, Paper} from '@mui/material'
import {Item} from '../model'

interface Props{
    item: Item
}
const NewItem:React.FC<Props> = ({item}) => {

    return (
        <Paper elevation={10} sx={{background:'rgba(0,0,0,0.2)', width:'100%', margin:'10px', padding:'10px'}}>
            <Stack direction='row' sx={{width:'100%', justifyContent:'space-between', flexWrap:'wrap'}}>
                <Typography variant='h3' color='white'>{item.title}</Typography>
                {item.rating ? <Rating name='rating' value={item.rating} precision={0.5} readOnly/> : ''}
            </Stack>
                {item.description ? <Typography sx={{marginTop:'10px'}} color='white'>{item.description}</Typography> : ''}
        </Paper>
    )
}

export default NewItem