import React from 'react';
import './App.css';
import GeneralContainer from './components/GeneralContainer';
import WelcomePage from './components/WelcomePage';
import ListPage from './components/ListPage'
import ResultsPage from './components/ResultsPage';


import { Item, Category } from './model'

function App() {

  const categories:Category[] = 
    [{name:'Movie',icon:'🎬'},
    {name:'Game',icon:'🎮'},
    {name:'Location',icon:'🌎'},
    {name:'Book',icon:'📚'},
    {name:'Song',icon:'🎵'},
    {name:'TV Show', icon:'📺'}]

  const [itemsList, setItemsList] = React.useState<Item[]>([])
  const [startList, setStartList] = React.useState<boolean>(false)
  const [endList, setEndList] = React.useState<boolean>(false)

  React.useEffect(function(){
    if(itemsList.length>0){
      setEndList(true)
    }
  },[itemsList])

  const resetList = () => {
    setItemsList([]);
    setStartList(false);
    setEndList(false);
  }

  return (
    <GeneralContainer>
      {startList ? 
        endList ?
           <ResultsPage items={itemsList} categories={categories} resetList={resetList}/> :
           <ListPage setItemsList={setItemsList} categories={categories} setEndList={setEndList}/>
        : 
        <WelcomePage setStartList={setStartList}/> }
    </GeneralContainer>
  );
}

export default App;
