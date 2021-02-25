import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Card, Container, Row, ListGroup, Pagination, PageItem} from 'react-bootstrap';
import NewsItem from './NewsItem';
import Message from '../layout/Message';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [pageNums, setPageNums] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [message, setMessage] = useState();
    

    useEffect(() => {
        axios.get('/api/news').then(res => {
            if(res.data.articles){
                setArticles(res.data.articles);
                if(res.data.totalResults > 0){
                    var pageNumArr = [];
                    for(var i=0; i<(res.data.totalResults / 20); i++){
                        pageNumArr.push(i + 1);
                    }
                    setPageNums(pageNumArr);
                }else{
                    setMessage({
                        message: 'No results found.',
                        variant: 'danger'
                    });
                }
            }else{
                setMessage({
                    message: 'Something went wrong while fetching data from API.',
                    variant: 'danger'
                });
            }
        }).catch(err => {
            console.log(err);
            setMessage({
                message: err.message,
                variant: 'danger'
            })
        })
    }, [])

    const handlePageChange = (e) => {
        setActivePage(+e.target.id);
        axios.get(`/api/news/page/${e.target.id}`).then(res => {
            if(res.data.articles){
                setArticles(res.data.articles);
                if(res.data.totalResults === 0){
                    setMessage({
                        message: 'No results found.',
                        variant: 'danger'
                    });
                }
            }else{
                setMessage({
                    message: 'Something went wrong while fetching data from API.',
                    variant: 'danger'
                });
            }
        });
        document.querySelector('#root').scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }

    return (
        <Container >
            <h1>News</h1>
            <Row>
                <Card className="my-3">
                    <Card.Body>
                        <Card.Title>Take a look at some relevant articles on advanced JS-based web development.</Card.Title>
                        <Card.Text>
                            This page uses the free <Card.Link href="https://newsapi.org/" target="__blank">News API</Card.Link> which you can 
                            check out yourself to create an account, get an API key, and start playing with it! This particular 
                            application of it shows the most relevant web results relating to fullstack Javascript.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <hr/>
            {message && message.message ? <Message variant={message.variant}>{message.message}</Message> : (
                <>
                    <Row>
                        <ListGroup >
                            {articles && articles.map((article, index) => (
                                <NewsItem article={article} key={index}/>
                            ))}
                        </ListGroup>
                    </Row>
                    <Row style={{justifyContent: 'center', marginTop: '1rem'}}>
                        <Pagination size='lg' >
                                {
                                    pageNums.map(num => (
                                        <PageItem 
                                            onClick={handlePageChange}
                                            active={activePage === num} 
                                            key={num}
                                            id={num}
                                        >{num}</PageItem>
                                    ))
                                }
                        </Pagination>
                    </Row>
                </>
            )}
        </Container>
    )
}

export default News
