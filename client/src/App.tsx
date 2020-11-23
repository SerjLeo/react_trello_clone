import React from 'react';
import {AppContainer} from "./styles";
import {Column} from "./components/Column";
import {AddItem} from "./components/AddItem";
import {useAppState} from "./context/AppStateContext";

function App() {
    const {state, dispatch} = useAppState()
  return (
    <AppContainer>
        {state.lists.map((list, i) => (
            <Column text={list.text} id={list.id} key={list.id} index={i}/>
        ))}
        <AddItem
            toggleButtonText="+ Add another list"
            onAdd={text => dispatch({type: "ADD_LIST", payload: text})} />
    </AppContainer>
  );
}

export default App;
