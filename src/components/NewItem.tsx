import React from 'react'
import {Typography, Stack, Rating, Paper, Button, TextField} from '@mui/material'
import {Item} from '../model'

interface Props{
    index: number;
    item: Item;
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
    deleteItem: (index: number) => void;
}
const NewItem:React.FC<Props> = ({index, item, items, setItems, deleteItem}) => {

    const [editing, setEditing] = React.useState<boolean>(false);
    const [title, setTitle] = React.useState<string>(item.title);
    const [description, setDescription] = React.useState<string | undefined>(item.description);
    const [rating, setRating] = React.useState<number | undefined>(item.rating);

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'title'){
            setTitle(event.target.value);
        }
        else if(event.target.name === 'description'){
            setDescription(event.target.value)
        }
    }

    const renderTitleAndRating = () => {
        if(editing){
            if(rating){
                return (
                    <>
                        <TextField label='title' name='title' value={title} onChange={handleTextFieldChange}></TextField>
                        <Rating precision={0.5} name='rating' value={rating} onChange={(event, newRating) => {if(newRating !== null){setRating(newRating)}}} />
                    </>
                )
            }
            else{
                return(
                    <TextField label='title' name='title' value={title} onChange={handleTextFieldChange}></TextField>
                )
            }
        }
        else{
            if(rating){
                return(
                    <>
                    <Typography variant='h3' color='white'>{title}</Typography>
                    <Rating name='rating' value={rating} precision={0.5} readOnly/>
                    </>
                )
            }
            else{
                return(
                    <Typography variant='h3' color='white'>{title}</Typography>
                )
            }
        }
    }

    const renderDescription = () => {
        if(editing){
            return(
                <TextField sx={{marginTop:'10px'}} label='description' name='description' value={description ? description : ''} onChange={handleTextFieldChange}></TextField>
            )
        }
        else{
            return(
                <Typography sx={{marginTop:'10px'}} color='white'>{description}</Typography>
            )
        }
    }

    const handleEditButton = () => {
        if(editing){
            const newItem = item;
            newItem.title = title;
            newItem.description = description;
            newItem.rating = rating;
            const allItems = items;
            allItems[index] = newItem;
            setItems(allItems);
            setEditing(false);
        }
        else{
            setEditing(true);
        }
    }

    const handleDelete = () => {
        console.log(items.slice(0,index).concat(items.slice(index+1)))
        setItems(items.slice(0,index).concat(items.slice(index+1)))
    }


    return (
        <Paper elevation={10} sx={{background:'rgba(0,0,0,0.2)', width:'100%', margin:'10px', padding:'10px'}}>

            <Stack direction='row' sx={{width:'100%', justifyContent:'space-between', flexWrap:'wrap'}}>

                {renderTitleAndRating()}
                
            </Stack>
            
            {renderDescription()}

            <Stack direction='row' sx={{justifyContent:'flex-end', width:'100%'}}>
                <Button disabled={title.length === 0} onClick={handleEditButton}>{editing ? 'SAVE' : 'EDIT'}</Button>
                <Button color='error' onClick={() => deleteItem(index)}>remove</Button>
            </Stack>
                
            
        </Paper>
    )
}

export default NewItem