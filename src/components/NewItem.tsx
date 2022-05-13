import React from 'react'
import {Typography, Stack} from '@mui/material'
import {Item} from '../model'

interface Props{
    item: Item
}
const NewItem:React.FC<Props> = ({item}) => {

    return (
        <Stack p={'10px'}>
            <Typography>{item.title}</Typography>
            <Typography>{item.description}</Typography>
        </Stack>
    )
}

export default NewItem