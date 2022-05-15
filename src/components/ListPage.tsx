import React from 'react'
import {Typography, Button} from '@mui/material'
import { Item, Category } from '../model'
import NewItem from './NewItem'
import CategoriesToggle from './CategoriesToggle'
import NewItemForm from './NewItemForm'

const ListPage:React.FC = () => {
    const categories:Category[] = 
    [{name:'Movie',icon:'🎬'},
    {name:'Game',icon:'🎮'},
    {name:'Location',icon:'🌎'},
    {name:'Book',icon:'📚'},
    {name:'TV Show', icon:'📺'}]
    const [items, setItems] = React.useState<Item[]>([])
    const [selectedCategory, setSelectedCategory] = React.useState<string>(categories[0].name)
    const [editingItem, setEditingItem] = React.useState<boolean>(false)

    const renderItems = () => {
        const itemsList = items.filter(item => item.category === selectedCategory)
                               .map(function(item,index){return <NewItem key={index} item={item}/>})
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

             <Button 
             onClick={()=>setEditingItem(true)} 
             sx={{marginTop:'20px'}}>
                 Add new item</Button>}
            
        </>
    )
}

export default ListPage