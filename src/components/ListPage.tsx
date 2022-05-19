import React from 'react'
import {Typography, Button, Stack} from '@mui/material'
import { Item, Category } from '../model'
import NewItem from './NewItem'
import CategoriesToggle from './CategoriesToggle'
import NewItemForm from './NewItemForm'

interface Props{
    setItemsList: React.Dispatch<React.SetStateAction<Item[]>>;
    categories:Category[];
    setEndList:React.Dispatch<React.SetStateAction<boolean>>;
}

const ListPage:React.FC<Props> = ({setItemsList, categories, setEndList}) => {
    const [items, setItems] = React.useState<Item[]>([])
    const [selectedCategory, setSelectedCategory] = React.useState<string>(categories[0].name)
    const [editingItem, setEditingItem] = React.useState<boolean>(false)

    const deleteItem = (indexToDelete:number) => {
        const newItems = items.filter(function(item,index){
            return index !== indexToDelete;
        })
        setItems(newItems)
    }

    const renderItems = () => {
        const itemsList = items.filter(item => item.category === selectedCategory)
                               .map(function(item){
                                   const indexOfItem:number = items.indexOf(item);
                                   return <NewItem key={indexOfItem} index={indexOfItem} item={item} items={items} setItems={setItems} deleteItem={deleteItem}/>})
        return(itemsList)
    }

    const addItem = (newItem:Item) => {
        setItems([...items,newItem])
        setEditingItem(false)
    }

    // const createScreenshot = () => {
    //     const list = document.getElementsByClassName('')
    // }


    return (
        <>
            <Typography variant='h3' marginBottom={3}>My memories</Typography>

            <CategoriesToggle 
            categories={categories} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
            disabled={editingItem}/>

            <Stack id='items' sx={{width:'100%'}}>

            {renderItems()}
            </Stack>


            {editingItem ? 

            <NewItemForm 
            addItem={addItem} 
            selectedCategory={selectedCategory} 
            setEditingItem={setEditingItem}/> :

             <Button variant='outlined'
             disabled={editingItem}
             onClick={()=>setEditingItem(true)} 
             sx={{marginTop:'20px'}}>
                 Add new {selectedCategory}</Button>}
            
            <Button onClick={() => setItemsList(items)} sx={{marginTop:'50px'}} variant='outlined' color='success' disabled={editingItem || items.length === 0}>Done</Button>

            <Button disabled={items.length === 0} onClick={() => setItems([])} sx={{marginTop:'50px'}} color='error' variant='outlined'>remove all items</Button>
        </>
    )
}

export default ListPage