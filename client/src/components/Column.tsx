import React from "react";
import {ColumnTitle, ColumnContainer} from "../styles";
import {AddItem} from "./AddItem";
import {Card} from "./Card";
import {useAppState} from "../context/AppStateContext";

interface ColumnProps {
    text: string,
    index: number,
    id: string
}

export const Column = ({text, index, id}:ColumnProps) => {
    const {state, dispatch} = useAppState()
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {state.lists[index].tasks.map(task => (
                <Card text={task.text} key={task.id}/>
            ))}
            <AddItem
                toggleButtonText="+ Add another task"
                onAdd={text => dispatch({type: "ADD_TASK", payload: {text, listId: id}})}
                isDark
            />
        </ColumnContainer>
    )
}
