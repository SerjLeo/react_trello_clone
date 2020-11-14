import React from 'react';
import {AppContainer} from "./styles";
import {Column} from "./components/Column";
import {AddItem} from "./components/AddItem";
import {useAppState} from "./context/AppStateContext";

function App() {
    const {state} = useAppState()
  return (
    <AppContainer>
        {state.lists.map((list, i) => (
            <Column text={list.text} key={list.id} index={i}/>
        ))}
        <AddItem toggleButtonText="+ Add another list" onAdd={text => console.log(text)} />
    </AppContainer>
  );
}

export default App;
