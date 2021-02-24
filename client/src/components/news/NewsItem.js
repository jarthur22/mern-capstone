import React from 'react'
import { Col, Image, ListGroup, Row } from 'react-bootstrap'

const NewsItem = ({article}) => {
    const {description, publishedAt, title, url, urlToImage} = article;
    
    const brokenImageUrl = (e) => {
        e.target.src = `${process.env.PUBLIC_URL}/images/image-not-found.png`;
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
                    <a href={url && url} target="__blank">
                        <Image 
                            src={urlToImage || `${process.env.PUBLIC_URL}/images/image-not-found.png`} 
                            onError={brokenImageUrl} 
                            style={{height: '70px', width: '70px', margin: '5px'}} 
                            thumbnail
                        />
                    </a>
                </Col>
                <Col>
                    <h5 className='mb-0'><a href={url && url} target="__blank">{title && title}</a></h5>
                    <a href={url && url} target="__blank"><span style={{fontSize: 'x-small', color: 'grey'}}>{url && url}</span></a>
                    <p style={{fontSize: 'small', marginBottom: '0'}}>{description && description}</p>
                    <span style={{fontSize: 'x-small', color: 'grey'}}>Date Published: {publishedAt && getTimestamp(publishedAt)}</span>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default NewsItem
