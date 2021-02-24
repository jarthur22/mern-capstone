import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Card, Container, Row, Form, PageItem, ListGroup, Pagination} from 'react-bootstrap'
import Message from '../layout/Message';

const BugReports = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bugPage, setBugPage] = useState('');
    const [bugName, setBugName] = useState('');
    const [description, setDescription] = useState('');
    const [submissionError, setSubmissionError] = useState(false);
    const [invalidInput, setInvalidInput] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [reports, setReports] = useState();
    const [pageNums, setPageNums] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [message, setMessage] = useState();

    useEffect(() => {
        axios.get('/api/bugs').then(res => {
            if(res.data && res.data.reports){
                if(res.data.reports.length === 0){
                    setMessage({
                        variant: 'warning',
                        message: 'No active bug reports.'
                    });
                    return;
                }
                console.log(res.data);
                setReports(res.data.reports);
                var pageNumArr = [];
                for(var i=0; i<(res.data.totalReports / 10); i++){
                    pageNumArr.push(i + 1);
                }
                setPageNums(pageNumArr);
            }else{
                setMessage({
                    variant: 'danger',
                    message: 'Error fetching bug reports.'
                });
            }
        }).catch(err => {
            console.log(err);
            setMessage({
                variant: 'danger',
                message: 'Internal server error.'
            });
        })
    }, [])

    const handleSetBugPage = (e) => {
        e.target.value !== "" && setBugPage(e.target.value);
    }

    const handlePageChange = (e) => {
        setActivePage(+e.target.id);
        axios.get(`/api/bugs/page/${e.target.id}`).then(res => {
            if(res.data && res.data.reports){
                setReports(res.data.reports);
                if(res.data.totalReports === 0){
                    setMessage({
                        message: 'No results found.',
                        variant: 'danger'
                    });
                }
            }else{
                setMessage({
                    message: 'Error fetching bug reports.',
                    variant: 'danger'
                });
            }
        });
        document.querySelector('#root').scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setBugPage('');
        setBugName('');
        setDescription('');
        setInvalidInput(false);
        axios.get('/api/bugs').then(res => {
            if(res.data && res.data.reports){
                if(res.data.reports.length === 0){
                    setMessage({
                        variant: 'warning',
                        message: 'No active bug reports.'
                    });
                    return;
                }
                console.log(res.data);
                setReports(res.data.reports);
                var pageNumArr = [];
                for(var i=0; i<(res.data.totalReports / 10); i++){
                    pageNumArr.push(i + 1);
                }
                setPageNums(pageNumArr);
            }else{
                setMessage({
                    variant: 'danger',
                    message: 'Error fetching bug reports.'
                });
            }
        }).catch(err => {
            console.log(err);
            setMessage({
                variant: 'danger',
                message: 'Internal server error.'
            });
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(firstName === "" || lastName === "" || bugPage === "" || bugName === "" || description === ""){
            setInvalidInput(true);
            return;
        }
        axios.post('/api/bugs', {
            fname: firstName,
            lname: lastName,
            page: bugPage,
            bugName,
            description
        }).then(res => {
            console.log(res.data);
            clearForm();
            setSubmitted(true);
            if(!res.data || !res.data._id){
                setSubmissionError(true);
            }
        }).catch(err => {
            console.log(err);
            clearForm();
            setSubmitted(true);
            setSubmissionError(true);
        })
    }

    const getTimestamp = (time) => {
        const datestamp = new Date(Date.parse(time)).toLocaleDateString('en-US');
        const timestamp = new Date(Date.parse(time)).toLocaleTimeString('en-US');
        return `${datestamp} at ${timestamp}`;
    }

    return (
        <Container>
            <h1>Bug Reports</h1>
            <Row>
                <Card className='my-3' style={{width: '100%'}}>
                    <Card.Header>Submit a Bug Report</Card.Header>
                    <Card.Body>
                        {submitted ? submissionError ? (
                            <Message variant='danger'>There was an error submitting your bug report.</Message>
                        ) : (
                            <Message variant='success'>Thank you for submitting your report!</Message>
                        ) : (
                            <Form className='form-inline' style={{display: 'flex'}} onSubmit={submitHandler}>
                                <Form.Group className='px-1' controlId='FirstName'>
                                    <Form.Label className='px-1'>First Name:</Form.Label>
                                    <Form.Control
                                        isInvalid={invalidInput ? true : false}
                                        type='text'
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group className='px-1' controlId='LastName'>
                                    <Form.Label className='px-1'>Last Name:</Form.Label>
                                    <Form.Control
                                        isInvalid={invalidInput ? true : false}
                                        type='text'
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <br/>
                                <Form.Group className='px-1 mt-3' controlId='Page'>
                                    <Form.Label className='px-1'>Page Affected:</Form.Label>
                                    <Form.Control
                                        isInvalid={invalidInput ? true : false}
                                        as='select'
                                        value={bugPage}
                                        onChange={handleSetBugPage}
                                        custom
                                    >
                                        <option value="" key={0}>Choose...</option>
                                        <option value="Home" key={1}>Home</option>
                                        <option value="Stack Breakdown" key={2}>Stack Breakdown</option>
                                        <option value="News" key={3}>News</option>
                                        <option value="History" key={4}>History</option>
                                        <option value="About" key={5}>About</option>
                                        <option value="Report A Bug" key={6}>Report A Bug</option>
                                        <option value="Whole Site" key={7}>Whole Site</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className='px-1 mt-3' controlId='BugName'>
                                    <Form.Label className='px-1'>Name of Bug:</Form.Label>
                                    <Form.Control
                                        isInvalid={invalidInput ? true : false}
                                        type='text'
                                        value={bugName}
                                        onChange={e => setBugName(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <br/>
                                <Form.Group style={{width: '100%'}} className='px-1 py-3' controlId='description'>
                                    <Form.Label className='px-1 mb-2'>Bug Description:</Form.Label>
                                    <br/>
                                    <Form.Control
                                        isInvalid={invalidInput ? true : false}
                                        as='textarea'
                                        rows={3}
                                        value={description}
                                        style={{width: '100%'}}
                                        onChange={e => setDescription(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <br/>
                                <div className='py-2' style={{width: '100%', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Button className="py-3 px-4" type='submit'>Submit</Button>
                                </div>
                            </Form>
                        )}
                    </Card.Body>
                </Card>
            </Row>
            {message && message.message ? <Message variant={message.variant}>{message.message}</Message> : (
                <>
                    <hr/>
                    <Row>
                        <h3>Currently Active Bug Reports</h3>
                        <ListGroup style={{width: '100%'}}>
                            {reports && reports.map((report, index) => (
                                <ListGroup.Item key={index} style={{backgroundColor: 'transparent', border: '1px solid darkgray', width: '100%'}}>
                                    <h5 className='mb-0'>{report.bugName}</h5>
                                    <span style={{fontSize: 'x-small', color: 'grey'}}>{report.page}</span>
                                    <p style={{fontSize: 'small', marginBottom: '0'}}>{report.description}</p>
                                    <span style={{fontSize: 'x-small', color: 'grey'}}>Date Reported: {getTimestamp(report.createdAt)}</span>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Row>
                    <Row style={{justifyContent: 'center', marginTop: '1rem'}}>
                        <Pagination size='lg'>
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

export default BugReports
