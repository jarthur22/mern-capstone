import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {useSelector} from 'react-redux';

const Markdown = () => {
    const [markdown, setMarkdown] = useState("");
    const stackDetails = useSelector(state => state.stackDetails);
    const {page} = stackDetails;

    useEffect(() => {
        page && fetch(page).then((res) => res.text()).then((text) => setMarkdown(text));
    }, [page])

    return (
        <>
            <ReactMarkdown children={markdown}/>
        </>
    )
}

export default Markdown;
