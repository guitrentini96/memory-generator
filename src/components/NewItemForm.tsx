import React from 'react'
import {Item} from '../model'

import {TextField, Button, Stack, Rating, Switch, FormControlLabel} from '@mui/material'

interface Props{
    addItem: (newItem: Item) => void;
    selectedCategory: string;
    setEditingItem: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewItemForm:React.FC<Props> = ({addItem, selectedCategory, setEditingItem}) => {

    const [newItem, setNewItem] = React.useState<Item>({title:'',category:selectedCategory})
    const [useRating, setUseRating] = React.useState<boolean>(false)
    const [rating, setRating] = React.useState<number>(2.5)

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem({...newItem,[event.target.name]:event.target.value})
    }

    const cancelNewItem = () => {
        setEditingItem(false);
        setNewItem({title:'',category:selectedCategory})
    }

    const sendNewItem = () => {
        const item = newItem;
        if(useRating){
            item.rating = rating;
        }
        addItem(item)
        setNewItem({title:'',category:selectedCategory})
        setUseRating(false);
        setRating(2.5);
    }

  return (
    <Stack sx={{marginTop:'20px', minHeight:'300px', justifyContent:'space-between'}}>
        <TextField label='title' name='title' value={newItem.title} onChange={handleTextFieldChange}></TextField>
        <TextField label='descrition' name='description' value={newItem.description ? newItem.description : ''} onChange={handleTextFieldChange}></TextField>
        <Stack direction='row' alignItems='center'>
            <FormControlLabel control={<Switch checked={useRating} onChange={()=>setUseRating(!useRating)} />} label='Rating' labelPlacement='top' />
            {useRating ? <Rating precision={0.5} name='rating' value={rating} onChange={(event, newRating) => {if(newRating !== null){setRating(newRating)}}} /> :''}
        </Stack>
        <Stack direction='row' sx={{width:'100%', justifyContent:'space-between'}}>
            <Button color='error' onClick={cancelNewItem} sx={{width:'45%'}} variant='contained'>cancel</Button>
            <Button color='primary' onClick={sendNewItem} disabled={newItem.title.length === 0} sx={{width:'45%'}} variant='contained'>create</Button>
        </Stack>
    </Stack>
  )
}

export default NewItemForm