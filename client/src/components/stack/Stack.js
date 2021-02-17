import React, { useState } from 'react'
import { Container, Nav, Row, Tab } from 'react-bootstrap'
import Backend from './backend/Backend'

const Stack = () => {
    const [key, setKey] = useState('backend')
    return (
        <Container  style={{padding: '0px'}}>
            <h2 className="py-2" style={{margin: 'auto', textAlign: 'center', width: '100%'}}>
                MERN Full Stack Breakdown
            </h2>
            <Tab.Container id="section-nav" defaultActiveKey="backend">
                <Row>
                    <Nav style={{width: '100%'}} fill variant="pills">
                        <Nav.Item>
                            <Nav.Link eventKey="backend">Backend</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="frontend">Frontend</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="hosting">Hosting/Dev Ops</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    <Tab.Content>
                        <Tab.Pane eventKey="backend">
                            <Backend/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="frontend">
                            The frontend
                        </Tab.Pane>
                        <Tab.Pane eventKey="hosting">
                            The hosting and dev ops
                        </Tab.Pane>
                    </Tab.Content>
                </Row>
            </Tab.Container>
        </Container>
    )
}

export default Stack
