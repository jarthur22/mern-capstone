import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BackendSideMenu from './BackendSideMenu';

const Backend = () => {
    return (
        <Container>
            <Row>
                <Col style={{padding: '0'}}>
                    <BackendSideMenu/>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    )
}

export default Backend
