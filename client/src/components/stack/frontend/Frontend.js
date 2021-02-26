import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Markdown from '../Markdown';
import FrontendSideMenu from './FrontendSideMenu';

const Frontend = () => {
    return (
        <Container style={{padding: '0'}}>
            <Row>
                <Col style={{maxWidth: '25vw', padding: '0', maxHeight: '100vh', overflowY: 'scroll'}}>
                    <FrontendSideMenu/>
                </Col>
                <Col style={{maxHeight: '100vh', overflowY: 'scroll'}}>
                    <Markdown/>
                </Col>
            </Row>
        </Container>
    )
}

export default Frontend
