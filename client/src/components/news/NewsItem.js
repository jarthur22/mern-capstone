import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Col, Image, ListGroup, Row } from 'react-bootstrap'

const NewsItem = ({article}) => {
    const {author, content, description, publishedAt, source, title, url, urlToImage} = article;
    const [thumbnail, setThumbnail] = useState(`${process.env.PUBLIC_URL}/images/image-not-found.png`);
    
    const brokenImageUrl = (e) => {
        e.target.src = thumbnail;
    }

    const getTimestamp = (time) => {
        const datestamp = new Date(Date.parse(time)).toLocaleDateString('en-US');
        const timestamp = new Date(Date.parse(time)).toLocaleTimeString('en-US');
        return `${datestamp} at ${timestamp}`;
    }

    return (
        <ListGroup.Item style={{backgroundColor: 'transparent', border: '1px solid darkgray'}}>
            <Row>
                <Col className='col-auto'>
                    <Image 
                        src={urlToImage || thumbnail} 
                        onError={brokenImageUrl} 
                        style={{height: '70px', width: '70px', margin: '5px'}} 
                        thumbnail
                    />
                </Col>
                <Col>
                    <h5 className='mb-0'>{title && title}</h5>
                    <span style={{fontSize: 'x-small', color: 'grey'}}>{url && url}</span>
                    <p style={{fontSize: 'small', marginBottom: '0'}}>{description && description}</p>
                    <span style={{fontSize: 'x-small', color: 'grey'}}>Date Published: {publishedAt && getTimestamp(publishedAt)}</span>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default NewsItem
