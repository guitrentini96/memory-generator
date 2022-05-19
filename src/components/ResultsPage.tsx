import { Typography, Stack, Paper, Rating, Button } from '@mui/material';
import React from 'react'
import {Item, Category} from '../model'

interface Props{
    items: Item[];
    categories: Category[];
    resetList: () => void;
}

const ResultsPage:React.FC<Props> = ({items, categories, resetList}) => {

    let renderedCategories:string[] = []

    const sortedItems = items.sort((i1,i2) => {
        if (i1.category > i2.category) {
            return 1;
        }
    
        if (i1.category < i2.category) {
            return -1;
        }
    
        return 0;
    });

    const renderItems = () => {
        const formatedItems = sortedItems.map(function(item, index){
            const currentCategory = categories.filter(cat => cat.name === item.category)[0];
            let newCategory = false;
            if(!renderedCategories.includes(item.category)){
                newCategory = true
                renderedCategories.push(currentCategory.name)
            }
                return(
                    <Stack key={index} sx={{ width:'100%'}}>
                        {newCategory ? <Typography variant='h3' sx={{alignSelf:'center', marginTop:'20px', marginBottom:'10px'}}>{currentCategory.icon} {currentCategory.name}s</Typography> : ''}
                        <Paper elevation={10} sx={{background:'rgba(0,0,0,0.2)', width:'100%', margin:'10px', padding:'10px'}}>

                            <Stack direction='row' sx={{width:'100%', justifyContent:'space-between', flexWrap:'wrap'}}>

                                <Typography variant='h4' color='white'>{item.title}</Typography>
                                {item.rating ? <Rating name='rating' value={item.rating} precision={0.5} readOnly/> : ''}
                
                            </Stack>
            
                            <Typography sx={{marginTop:'5px'}} color='white'>{item.description}</Typography>

                        </Paper>
                    </Stack>
                )
            
        })
        return formatedItems
    }

    return (
        <Stack sx={{width:'100%', alignItems:'center'}}>
        {renderItems()}

        <Button color='error' variant='outlined' onClick={resetList} sx={{marginTop:'50px', width:'30%'}}>Reset List</Button>
        </Stack>
    )
}

export default ResultsPage