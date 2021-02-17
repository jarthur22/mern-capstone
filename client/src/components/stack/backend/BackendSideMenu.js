import React from 'react'
import { Accordion, Card, Container, ListGroup } from 'react-bootstrap'

const BackendSideMenu = () => {
    return (
        <Container style={{padding: '0'}}>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="react">React</Accordion.Toggle>
                    <Accordion.Collapse eventKey="react">
                        <Card.Body style={{padding: '0'}}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>&nbsp;&nbsp;Overview</ListGroup.Item>
                                <ListGroup.Item>&nbsp;&nbsp;Components</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="redux">Redux</Accordion.Toggle>
                    <Accordion.Collapse eventKey="redux">
                    <Card.Body style={{padding: '0'}}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>&nbsp;&nbsp;Overview</ListGroup.Item>
                                <ListGroup.Item>&nbsp;&nbsp;Store</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="style">Style</Accordion.Toggle>
                    <Accordion.Collapse eventKey="style">
                    <Card.Body style={{padding: '0'}}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>&nbsp;&nbsp;Overview</ListGroup.Item>
                                <ListGroup.Item>&nbsp;&nbsp;Bootstrap</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    )
}

export default BackendSideMenu
