const initialState = [];
export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'imgCat/getImgCat':
            return action.payload.map((item) => item.url)
        case 'imgCat/clearState':
            return action.payload;
        default: return state;
    }
}