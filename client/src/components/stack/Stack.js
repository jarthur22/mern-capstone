import React, { useEffect, useState } from 'react'
import { Container, Nav, Row, Tab } from 'react-bootstrap'
import Backend from './backend/Backend'
import Frontend from './frontend/Frontend'

const Stack = ({match}) => {
    const pageFromUrl = match.params.page ? match.params.page.split("-")[0] : "backend";
    const sectionFromUrl = match.params.page && match.params.page.split("-")[1] ? match.params.page.split("-")[1] : "";
    const [activeKey, setActiveKey] = useState("");
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        if(pageFromUrl){
            setActiveKey(pageFromUrl)
        }
    }, [pageFromUrl])

    useEffect(() => {
        if(sectionFromUrl){
            setActiveSection(sectionFromUrl)
        }
    }, [sectionFromUrl])

    return (
        <Container  style={{padding: '0px'}}>
            <h2 className="py-2" style={{margin: 'auto', textAlign: 'center', width: '100%'}}>
                MERN Full Stack Breakdown
            </h2>
            <Tab.Container id="section-nav" activeKey={activeKey}>
                <Row className="mb-2">
                    <Nav style={{width: '100%'}} fill variant="pills">
                        <Nav.Item>
                            <Nav.Link className='stack-page-nav-backend' onClick={() => setActiveKey("backend")} eventKey="backend">Backend</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='stack-page-nav-frontend' onClick={() => setActiveKey("frontend")} eventKey="frontend">Frontend</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='stack-page-nav-hosting' onClick={() => setActiveKey("hosting")} eventKey="hosting">Hosting/Dev Ops</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row style={{marginLeft: '0px', marginRight: '0px'}}>
                    <Tab.Content style={{width: '100%'}}>
                        <Tab.Pane eventKey="backend">
                            <Backend activeSection={activeSection} setActiveSection={setActiveSection}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="frontend">
                            <Frontend activeSection={activeSection} setActiveSection={setActiveSection}/>
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
