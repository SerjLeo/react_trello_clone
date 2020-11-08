import React from "react";
import {ColumnTitle, ColumnContainer} from "../styles";
import {AddItem} from "./AddItem";

interface ColumnProps {
    text: string
}

export const Column = ({text, children}:React.PropsWithChildren<ColumnProps>) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
            <AddItem
                toggleButtonText="+ Add another task"
                onAdd={text => console.log(text)}
                isDark
            />
        </ColumnContainer>
    )
}
