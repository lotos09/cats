export const inputReducer = (state = '', action) => {
    switch (action.type) {
        case 'input/setInput':
            return action.payload;
        default: return state;
    }
}