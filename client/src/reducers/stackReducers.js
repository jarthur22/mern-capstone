const stackReducer = (state = {}, action) => {
    switch(action.type){
        case 'SECTION_SET':
            return {...state, section: action.payload};
        case 'SUBSECTION_SET':
            return {...state, subSection: action.payload};
        case 'PAGE_SET':
            return {...state, page: action.payload};
        default:
            return state;
    }
}

export {
    stackReducer
};