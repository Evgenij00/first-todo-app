export const alertReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'show':
            return {...action.payload, visible: true}
        case 'hide':
            return {...state, visible: false}
        default:
            return state
    }
}