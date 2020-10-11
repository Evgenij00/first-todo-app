export const todoReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'add':
            return [...state, {name: action.text, id: Date.now()}]
        case 'remove':
            return state.filter( (item: any) => item.id !== action.id);
        default:
            throw new Error("Что происходит?");
    }
}