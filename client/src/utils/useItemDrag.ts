import { useDrag } from "react-dnd"
import { useAppState } from "../context/AppStateContext"
import { DragItem } from "../enteties/DragItem"
export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState()
    const [, drag ] = useDrag({
        item,
        begin: () =>
            dispatch({
                type: "SET_DRAGGED_ITEM",
                payload: item
            }),
        end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: null})
    })
    return { drag }
}