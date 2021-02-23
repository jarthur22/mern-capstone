import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Card, Container, ListGroup, Pagination} from 'react-bootstrap';
import NewsItem from './NewsItem';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [pageNums, setPageNums] = useState([]);
    const [message, setMessage] = useState();
    

    useEffect(() => {
        axios.get('/api/news').then(res => {
            console.log(res.data)
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

    return (
        <Container >
            <h1>News</h1>
            <Card className="my-3">
                <Card.Body>
                    <Card.Title>Take a look at some relevant articles on advanced JS-based web development.</Card.Title>
                    <Card.Text>
                        This page uses the free <Card.Link href="https://newsapi.org/">News API</Card.Link> which you can 
                        check out yourself to create an account, get an API key, and start playing with it! This particular 
                        application of it shows the most relevant web results relating to fullstack Javascript.
                    </Card.Text>
                </Card.Body>
            </Card>
            <hr/>
            <ListGroup >
                {articles && articles.map((article, index) => (
                    <NewsItem article={article} key={index}/>
                ))}
            </ListGroup>
            <Pagination size='lg' >
                    {
                        pageNums.map(num => (
                            <Pagination.Item key={num}>{num}</Pagination.Item>
                        ))
                    }
            </Pagination>
        </Container>
    )
}

export default News
