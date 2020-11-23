interface Item {
    id: string
}

export const findIndexById = <T extends Item>(items: T[], id: string): number => {
    return items.findIndex((item:T) => item.id === id)
}