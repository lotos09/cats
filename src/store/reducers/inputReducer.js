export const inputReducer = (state = 'aa', action) => {
    switch (action.type) {
        case 'input/setInput':
            return action.payload;
        default: return state;
    }
}