import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import HistoryMarkdown from './HistoryMarkdown.md'
import ReactMarkdown from 'react-markdown';

const History = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(HistoryMarkdown).then((res) => res.text()).then((text) => setMarkdown(text));
    }, [])

    return (
        <Container>
            <ReactMarkdown children={markdown}/>
        </Container>
    )
}

export default History
