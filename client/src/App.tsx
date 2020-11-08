import React from 'react';
import {AppContainer} from "./styles";
import {Card} from "./components/Card";
import {Column} from "./components/Column";
import {AddItem} from "./components/AddItem";

function App() {
  return (
    <AppContainer>
        <Column text="To Do">
            <Card text="Learn GraphQL"/>
            <Card text="Generate app scaffold"/>
        </Column>
        <Column text="In Progress">
            <Card text="Learn how to type components"/>
        </Column>
        <Column text="Done">
            <Card text="Start Building Project"/>
        </Column>
        <AddItem toggleButtonText="+ Add another list" onAdd={text => console.log(text)} />
    </AppContainer>
  );
}

export default App;
