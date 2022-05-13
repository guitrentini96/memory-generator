import React from 'react'
import {Typography, Button} from '@mui/material'
import { Item } from '../model'
import NewItem from './NewItem'

const ListPage:React.FC = () => {
    const [items, setItems] = React.useState<Item[]>([])

    const addItem = () => {
        setItems([...items,{title:'aaa',description:'bbb'}])
    }

    return (
        <>
            <Typography variant='h3'>List Started</Typography>
            {items.map(item => <NewItem item={item}/>)}
            <Button variant='contained' sx={{marginTop:'30px'}} onClick={addItem}>Add new Item</Button>
        </>
    )
}

export default ListPage