import React from 'react'
import {Item} from '../model'

import {TextField, Button, Stack} from '@mui/material'

interface Props{
    addItem: (newItem: Item) => void;
    selectedCategory: string;
    setEditingItem: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewItemForm:React.FC<Props> = ({addItem, selectedCategory, setEditingItem}) => {

    const [newItem, setNewItem] = React.useState<Item>({title:'',description:'',category:selectedCategory})

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem({...newItem,[event.target.name]:event.target.value})
    }

    const cancelNewItem = () => {
        setEditingItem(false);
        setNewItem({title:'',description:'',category:selectedCategory})
    }

    const createNewItem = () => {
        addItem(newItem)
        setNewItem({title:'',description:'',category:selectedCategory})
    }

  return (
    <Stack sx={{marginTop:'20px', minHeight:'200px', justifyContent:'space-between'}}>
        <TextField label='title' name='title' value={newItem.title} onChange={handleTextFieldChange}></TextField>
        <TextField label='descrition' name='description' value={newItem.description} onChange={handleTextFieldChange}></TextField>
        <Stack direction='row' sx={{width:'100%', justifyContent:'space-between'}}>
            <Button color='error' onClick={cancelNewItem} sx={{width:'45%'}} variant='contained'>cancel</Button>
            <Button color='primary' onClick={createNewItem} disabled={newItem.title.length === 0} sx={{width:'45%'}} variant='contained'>create</Button>

        </Stack>
    </Stack>
  )
}

export default NewItemForm