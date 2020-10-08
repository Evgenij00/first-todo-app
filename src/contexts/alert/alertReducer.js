export const alertReducer = (state, action) => {
    switch(action.type) {
        case 'show':
            return {...action.payload, visible: true}
        case 'hide':
            return {...state, visible: false}
        default:
            return state
    }
}