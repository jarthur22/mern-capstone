import React, { useEffect, useState } from 'react'
import { Container, Nav, Row, Tab } from 'react-bootstrap'
import { setPage, setSection, setSubSection } from '../../actions/stackActions'
import Backend from './backend/Backend'
import Frontend from './frontend/Frontend'
import {useSelector, useDispatch} from 'react-redux';

import ServerOverview from './backend/pages/Server.Overview.md';
import APIOverview from './backend/pages/API.Overview.md';
import DatabaseOverview from './backend/pages/Database.Overview.md';

import ReactOverview from './frontend/pages/React.Overview.md';
import ReduxOverview from './frontend/pages/Redux.Overview.md';

const Stack = ({match}) => {
    const sectionFromUrl = match.params.page ? match.params.page.split("-")[0] : "backend";
    const subSectionFromUrl = match.params.page && match.params.page.split("-")[1] ? match.params.page.split("-")[1] : "";

    const stackDetails = useSelector(state => state.stackDetails);
    const {section} = stackDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        if(sectionFromUrl){
            ['backend', 'frontend', 'hosting'].includes(sectionFromUrl) ? 
            dispatch(setSection(sectionFromUrl)) : 
            dispatch(setSection('backend'));
            if(['backend', 'frontend', 'hosting'].includes(sectionFromUrl)){
                switch(sectionFromUrl){
                    case 'backend':
                        dispatch(setSubSection('server'));
                        dispatch(setPage(ServerOverview));
                        break;
                    case 'frontend':
                        dispatch(setSubSection('react'));
                        dispatch(setPage(ReactOverview));
                        break;
                    case 'hosting':
                        dispatch(setSubSection('heroku'));
                        break;
                    default:
                        dispatch(setSubSection('server'));
                        dispatch(setPage(ServerOverview));
                        break;
                }
            }else{
                dispatch(setSection('backend'));
            }
        }
    }, [sectionFromUrl])

    useEffect(() => {
        if(subSectionFromUrl && sectionFromUrl){
            switch(sectionFromUrl){
                case 'backend':
                    switch(subSectionFromUrl){
                        case 'server':
                            dispatch(setSubSection(subSectionFromUrl));
                            dispatch(setPage(ServerOverview));
                            break;
                        case 'api':
                            dispatch(setSubSection(subSectionFromUrl));
                            dispatch(setPage(APIOverview));
                            break;
                        case 'database':
                            dispatch(setSubSection(subSectionFromUrl));
                            dispatch(setPage(DatabaseOverview));
                            break;
                        default:
                            dispatch(setSubSection('server'));
                            dispatch(setPage(ServerOverview));
                            break;
                    }
                    break;
                case 'frontend':
                    switch(subSectionFromUrl){
                        case 'react':
                            dispatch(setSubSection(subSectionFromUrl));
                            dispatch(setPage(ReactOverview));
                            break;
                        case 'redux':
                            dispatch(setSubSection(subSectionFromUrl));
                            dispatch(setPage(ReduxOverview))
                            break;
                        case 'style':
                            dispatch(setSubSection(subSectionFromUrl));
                            break;
                        default:
                            dispatch(setSubSection('react'));
                            dispatch(setPage(ReactOverview));
                            break;
                    }
                    break;
                case 'hosting':
                    switch(subSectionFromUrl){
                        case 'heroku':
                            dispatch(setSubSection(subSectionFromUrl));
                            break;
                        case 'github':
                            dispatch(setSubSection(subSectionFromUrl));
                            break;
                        default:
                            dispatch(setSubSection('heroku'));
                            break;
                    }
                    break;
                default:
                    dispatch(setSubSection('server'));
                    dispatch(setPage(ServerOverview));
                    break;
            }
            
        }
    }, [subSectionFromUrl, sectionFromUrl])

    return (
        <Container  style={{padding: '0px'}}>
            <h2 className="py-3" style={{margin: 'auto', textAlign: 'center', width: '100%'}}>
                MERN Full Stack Breakdown
            </h2>
            <Tab.Container id="section-nav" activeKey={section}>
                <Row className="mb-2">
                    <Nav style={{width: '100%'}} fill variant="pills">
                        <Nav.Item>
                            <Nav.Link className='stack-page-nav-backend' onClick={() => {
                                dispatch(setSection("backend"));
                                dispatch(setSubSection('server'));
                                dispatch(setPage(ServerOverview));
                            }} eventKey="backend">Backend</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='stack-page-nav-frontend' onClick={() => {
                                dispatch(setSection("frontend"));
                                dispatch(setSubSection('react'));
                                dispatch(setPage(ReactOverview));
                            }} eventKey="frontend">Frontend</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='stack-page-nav-hosting' onClick={() => {
                                dispatch(setSection("hosting"));
                                dispatch(setSubSection('heroku'));
                                dispatch(setPage(ServerOverview));
                            }} eventKey="hosting">Hosting/Dev Ops</Nav.Link>
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
            <Row style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
                <p><i className="fa fa-github"></i>&nbsp;&nbsp;<a href="https://github.com/jarthur22/mern-capstone" target="__blank">Check out the full project on Github</a></p>
            </Row>
        </Container>
    )
}



export default Stack
