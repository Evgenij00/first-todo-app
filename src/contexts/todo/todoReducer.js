export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'add':
            return [...state, {name: action.text, id: Date.now()}]
        case 'remove':
            return state.filter( (item) => item.id !== action.id);
        default:
            throw new Error("Что происходит?");
    }
}