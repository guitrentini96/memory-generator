import React from 'react'
import {Typography, Button, Stack} from '@mui/material'
import { Item, Category } from '../model'
import NewItem from './NewItem'
import CategoriesToggle from './CategoriesToggle'
import NewItemForm from './NewItemForm'

interface Props{
    items:Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
    categories:Category[];
    setEndList:React.Dispatch<React.SetStateAction<boolean>>;
}

const ListPage:React.FC<Props> = ({items, setItems, categories, setEndList}) => {
    const [selectedCategory, setSelectedCategory] = React.useState<string>(categories[0].name)
    const [editingItem, setEditingItem] = React.useState<boolean>(false)

    const renderItems = () => {
        const removeItem = (indexOfItem:number) => {
            setItems(items.slice(0,indexOfItem).concat(items.slice(indexOfItem+1)))
        }
        const itemsList = items.filter(item => item.category === selectedCategory)
                               .map(function(item){
                                   const indexOfItem:number = items.indexOf(item);
                                   return <NewItem key={indexOfItem} index={indexOfItem} item={item} removeItem={removeItem} items={items} setItems={setItems}/>})
        return(itemsList)
    }

    const addItem = (newItem:Item) => {
        setItems([...items,newItem])
        setEditingItem(false)
    }


    return (
        <>
            <Typography variant='h3' marginBottom={3}>List Started</Typography>

            <CategoriesToggle 
            categories={categories} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
            disabled={editingItem}/>

            {renderItems()}

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
            
            <Button onClick={() => setEndList(true)} sx={{marginTop:'50px'}} variant='outlined' color='success' disabled={editingItem || items.length === 0}>Done</Button>

            <Button disabled={items.length === 0} onClick={() => setItems([])} sx={{marginTop:'50px'}} color='error' variant='outlined'>remove all items</Button>
        </>
    )
}

export default ListPage