import React, {useState} from "react";
import {NewItemFormContainer, NewItemInput, NewItemButton} from "../styles";
import {useFocus} from "../utils/useFocus";

interface AddItemFormProps {
    onAdd(text: string): void
}

export const AddItemForm = ({onAdd}:AddItemFormProps) => {
    const [text, setText] = useState<string>("")
    const inputRef = useFocus()

    return (
        <NewItemFormContainer>
            <NewItemInput ref={inputRef} value={text} onChange={e => setText(e.target.value)}/>
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )
}
