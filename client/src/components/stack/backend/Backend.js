import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Markdown from '../Markdown';
import BackendSideMenu from './BackendSideMenu';

//import default page refs
import ServerOverview from './pages/Server.Overview.md';
import APIOverview from './pages/API.Overview.md';

const Backend = ({activeSection, setActiveSection}) => {
    const [currentPage, setCurrentPage] = useState(activeSection ? activeSection === '' ? ServerOverview : APIOverview : ServerOverview);

    //this really just needs to all be handled in redux. Get on it.
    useEffect(() => {
        if(activeSection){
            switch (activeSection) {
                case 'server':
                    setCurrentPage(ServerOverview);
                    break;
                case 'api':
                    setCurrentPage(APIOverview);
                    break;
                default:
                    break;
            }
        }
    }, [activeSection])

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <Container style={{padding: '0'}}>
            <Row>
                <Col style={{maxWidth: '25vw', padding: '0', maxHeight: '100vh', overflowY: 'scroll'}}>
                    <BackendSideMenu 
                        activeSection={activeSection} 
                        setActiveSection={setActiveSection} 
                        handlePageChange={handlePageChange}
                    />
                </Col>
                <Col style={{maxHeight: '100vh', overflowY: 'scroll'}}>
                    <Markdown page={currentPage}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Backend
