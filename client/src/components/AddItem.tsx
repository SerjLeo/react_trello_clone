import React, {useState} from "react";
import {AddItemButton} from "../styles";
import {AddItemForm} from "./AddItemForm";

interface AddItemProps {
    onAdd(text: string): void
    toggleButtonText: string
    isDark?: boolean
}

export const AddItem = ({onAdd, toggleButtonText, isDark}: AddItemProps) => {
    const [showForm, setShowForm] = useState<boolean>(false)

    if(showForm) {
        return (
            <AddItemForm onAdd={text => {
                onAdd(text)
                setShowForm(false)
            }}/>
        )
    }

    return (
        <AddItemButton isDark={isDark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
}
