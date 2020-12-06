import {DragItem} from "../enteties/DragItem";

export const isHidden = (
    draggedItem: DragItem|null,
    itemType: string,
    id: string
): boolean => !!(draggedItem && draggedItem.type === itemType && draggedItem.id === id)