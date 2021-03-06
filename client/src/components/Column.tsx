import React, {useRef} from "react";
import {ColumnTitle, ColumnContainer} from "../styles";
import {AddItem} from "./AddItem";
import {Card} from "./Card";
import {useAppState} from "../context/AppStateContext";
import {useItemDrag} from "../utils/useItemDrag";
import { useDrop } from "react-dnd";
import {DragItem} from "../enteties/DragItem";
import {isHidden} from "../utils/isHidden";

interface ColumnProps {
    text: string,
    index: number,
    id: string
}

export const Column = ({text, index, id}:ColumnProps) => {
    const {state, dispatch} = useAppState()
    const [, drop] = useDrop({
        accept: "COLUMN",
        hover(item: DragItem) {
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) return;
            dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex }})
            item.index = hoverIndex
        }
    })
    const ref = useRef<HTMLDivElement>(null)
    const {drag} = useItemDrag({type: "COLUMN", id, index, text})
    drag(drop(ref))
    return (
        <ColumnContainer ref={ref} isHidden={isHidden(state.draggedItem, "COLUMN", id)}>
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
