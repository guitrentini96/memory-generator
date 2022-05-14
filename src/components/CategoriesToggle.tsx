import React from 'react'
import {ToggleButton, ToggleButtonGroup} from '@mui/material'

import { Category } from '../model'

interface Props{
    categories: Category[];
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    disabled:boolean;
}

const CategoriesToggle:React.FC<Props> = ({categories,selectedCategory,setSelectedCategory,disabled}) => {

    const handleCategoryChange = (event: React.MouseEvent<HTMLElement>,newCategory:string) => {
        if(newCategory !== null){
            setSelectedCategory(newCategory)
        }
    }

    return (
        <ToggleButtonGroup
        value={selectedCategory}
        exclusive
        onChange={handleCategoryChange}
        aria-label="category"
        disabled={disabled}
    >
        {categories.map(category => <ToggleButton value={category.name} aria-label={category.name} key={category.name}>{category.icon}</ToggleButton>)}
    </ToggleButtonGroup>
    )
}

export default CategoriesToggle