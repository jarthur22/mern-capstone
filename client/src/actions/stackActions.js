const setSection = (section) => (dispatch) => {
    dispatch({type: 'SECTION_SET', payload: section});
}

const setSubSection = (subSection) => (dispatch) => {
    dispatch({type: 'SUBSECTION_SET', payload: subSection});
}

const setPage = (page) => (dispatch) => {
    dispatch({type: 'PAGE_SET', payload: page});
}

export {
    setSection,
    setSubSection,
    setPage
};