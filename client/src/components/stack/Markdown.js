import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Markdown = () => {
    const [markdown, setMarkdown] = useState("");
    const stackDetails = useSelector(state => state.stackDetails);
    const {page} = stackDetails;

    useEffect(() => {
        page && fetch(page).then((res) => res.text()).then((text) => setMarkdown(text));
    }, [page])

    const RouterLink = (props) => {
        return (
          props.href.match(/^(https?:)?\/\//)
            ? <a href={props.href} target="__blank">{props.children}</a>
            : <Link to={props.href}>{props.children}</Link>
        );
    }

    return (
        <>
            <ReactMarkdown children={markdown} renderers={{link: RouterLink}}/>
        </>
    )
}

export default Markdown;
