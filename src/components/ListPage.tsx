import React from 'react'
import {Typography, Button} from '@mui/material'
import { Item, Category } from '../model'
import NewItem from './NewItem'
import CategoriesToggle from './CategoriesToggle'

const ListPage:React.FC = () => {
    const categories:Category[] = 
    [{name:'Movie',icon:'🎬'},
    {name:'Game',icon:'🕹'},
    {name:'Location',icon:'🗺'},
    {name:'Book',icon:'📚'},
    {name:'TV Show', icon:'📺'}]
    const [items, setItems] = React.useState<Item[]>([])
    const [selectedCategory, setSelectedCategory] = React.useState<string>(categories[0].name)

    const renderItems = () => {
        const itemsList = items.filter(item => item.category === selectedCategory)
                               .map(function(item,index){return <NewItem key={index} item={item}/>})
        return(itemsList)
    }

    const addItem = () => {
        const newItem:Item = {title:`New ${selectedCategory}`, description:`New ${selectedCategory} description`, category:selectedCategory}
        setItems([...items,newItem])
    }

    return (
        <>
            <Typography variant='h3' marginBottom={3}>List Started</Typography>
            <CategoriesToggle categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            {renderItems()}
            <Button onClick={addItem} sx={{marginTop:'20px'}}>Add new item</Button>
        </>
    )
}

export default ListPage