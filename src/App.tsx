import React from 'react';
import './App.css';
import GeneralContainer from './components/GeneralContainer';
import WelcomePage from './components/WelcomePage';
import ListPage from './components/ListPage'

import { Item, Category } from './model'

function App() {

  const categories:Category[] = 
    [{name:'Movie',icon:'🎬'},
    {name:'Game',icon:'🎮'},
    {name:'Location',icon:'🌎'},
    {name:'Book',icon:'📚'},
    {name:'Song',icon:'🎵'},
    {name:'TV Show', icon:'📺'}]

  const [items, setItems] = React.useState<Item[]>([])
  const [startList, setStartList] = React.useState<boolean>(false)
  const [endList, setEndList] = React.useState<boolean>(false)

  return (
    <GeneralContainer>
      {startList ? 
        endList ?
           <h1>the end</h1> :
           <ListPage items={items} setItems={setItems} categories={categories} setEndList={setEndList}/>
        : 
        <WelcomePage setStartList={setStartList}/> }
    </GeneralContainer>
  );
}

export default App;
