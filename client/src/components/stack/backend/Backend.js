import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BackendPageScreen from './BackendPageScreen';
import BackendSideMenu from './BackendSideMenu';

//import default page ref
import APIOverview from './pages/API.Overview.md';

const Backend = () => {
    const [currentPage, setCurrentPage] = useState(APIOverview);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <Container style={{padding: '0'}}>
            <Row>
                <Col style={{maxWidth: '25vw', padding: '0', maxHeight: '100vh', overflowY: 'scroll'}}>
                    <BackendSideMenu handlePageChange={handlePageChange}/>
                </Col>
                <Col style={{maxHeight: '100vh', overflowY: 'scroll'}}>
                    <BackendPageScreen page={currentPage}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Backend
