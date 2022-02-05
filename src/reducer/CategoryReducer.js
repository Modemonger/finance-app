export default (state, action) => {
    switch (action.type) {
        case 'DELETE_CATEGORY':
            return {
                ...state, categories: state.categories.filter(categories => categories.id !== action.payload)
            }
        case 'ADD_CATEGORY':
            return {
                ...state, categories: [action.payload, ...state.categories]
            }
        default:
            return state;
    }
}