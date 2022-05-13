import React from 'react';
import './App.css';
import GeneralContainer from './components/GeneralContainer';
import WelcomePage from './components/WelcomePage';
import ListPage from './components/ListPage'

function App() {
  const [startList, setStartList] = React.useState<boolean>(false)

  return (
    <GeneralContainer>
      {startList ? <ListPage/> : <WelcomePage setStartList={setStartList}/> }
    </GeneralContainer>
  );
}

export default App;
