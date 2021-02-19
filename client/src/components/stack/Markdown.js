import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({page, renderers}) => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        page && fetch(page).then((res) => res.text()).then((text) => setMarkdown(text));
    }, [page])

    return (
        <>
            <ReactMarkdown children={markdown} renderers={renderers}/>
        </>
    )
}

export default Markdown;
