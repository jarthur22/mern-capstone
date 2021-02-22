import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Markdown from '../Markdown';
import BackendSideMenu from './BackendSideMenu';

const Backend = () => {
    
    return (
        <Container style={{padding: '0'}}>
            <Row>
                <Col style={{maxWidth: '25vw', padding: '0', maxHeight: '100vh', overflowY: 'scroll'}}>
                    <BackendSideMenu/>
                </Col>
                <Col style={{maxHeight: '100vh', overflowY: 'scroll'}}>
                    <Markdown/>
                </Col>
            </Row>
        </Container>
    )
}

export default Backend
