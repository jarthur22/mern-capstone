import React, { useEffect, useState } from 'react'
import { Container, Nav, Row, Tab } from 'react-bootstrap'
import { setPage, setSection, setSubSection } from '../../actions/stackActions'
import Backend from './backend/Backend'
import Frontend from './frontend/Frontend'
import {useSelector, useDispatch} from 'react-redux';

import ServerOverview from './backend/pages/Server.Overview.md';
import APIOverview from './backend/pages/API.Overview.md';

const Stack = ({match}) => {
    const sectionFromUrl = match.params.page ? match.params.page.split("-")[0] : "backend";
    const subSectionFromUrl = match.params.page && match.params.page.split("-")[1] ? match.params.page.split("-")[1] : "";

    const stackDetails = useSelector(state => state.stackDetails);
    const {section} = stackDetails;
    console.log(section)

    const dispatch = useDispatch();

    useEffect(() => {
        if(sectionFromUrl){
            dispatch(setSection(sectionFromUrl));
        }
    }, [sectionFromUrl])

    useEffect(() => {
        if(subSectionFromUrl){
            dispatch(setSubSection(subSectionFromUrl));
            switch(subSectionFromUrl){
                case 'server':
                    dispatch(setPage(ServerOverview));
                    break;
                case 'api':
                    dispatch(setPage(APIOverview));
                    break;
                default:
                    break;
            }
        }
    }, [subSectionFromUrl])

    return (
        <Container  style={{padding: '0px'}}>
            <h2 className="py-2" style={{margin: 'auto', textAlign: 'center', width: '100%'}}>
                MERN Full Stack Breakdown
            </h2>
            <Tab.Container id="section-nav" activeKey={section}>
                <Row className="mb-2">
                    <Nav style={{width: '100%'}} fill variant="pills">
                        <Nav.Item>
                            <Nav.Link className='stack-page-nav-backend' onClick={() => dispatch(setSection("backend"))} eventKey="backend">Backend</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='stack-page-nav-frontend' onClick={() => dispatch(setSection("frontend"))} eventKey="frontend">Frontend</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='stack-page-nav-hosting' onClick={() => dispatch(setSection("hosting"))} eventKey="hosting">Hosting/Dev Ops</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row style={{marginLeft: '0px', marginRight: '0px'}}>
                    <Tab.Content style={{width: '100%'}}>
                        <Tab.Pane eventKey="backend">
                            <Backend/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="frontend">
                            <Frontend/>
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
