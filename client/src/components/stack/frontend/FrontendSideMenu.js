import React from 'react'
import { Accordion, Card, Container, ListGroup } from 'react-bootstrap'
import { setPage, setSubSection } from '../../../actions/stackActions';
import {useSelector, useDispatch} from 'react-redux';

//import page refs
import ReactOverview from './pages/React.Overview.md';
import ReactComponents from './pages/React.Components.md';
import ReactRouter from './pages/React.Router.md';
import ReactHooks from './pages/React.Hooks.md';

import APIOverview from '../backend/pages/API.Overview.md';

import DatabaseOverview from '../backend/pages/Database.Overview.md';


const FrontendSideMenu = () => {
    const stackDetails = useSelector(state => state.stackDetails);
    const {subSection} = stackDetails;

    const dispatch = useDispatch();

    return (
        <Container style={{padding: '0'}}>
            <Accordion activeKey={!['react', 'redux', 'style'].includes(subSection) ? "react" : subSection}>
                <MenuSection eventKey={"react"} title="React" onClick={() => dispatch(setSubSection('react'))}>
                    <MenuItem onClick={() => dispatch(setPage(ReactOverview))}>Overview</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(ReactComponents))}>Components</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(ReactRouter))}>Router</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(ReactHooks))}>Hooks</MenuItem>
                </MenuSection>
                <MenuSection eventKey={"redux"} title="Redux" onClick={() => dispatch(setSubSection('redux'))}>
                    <MenuItem onClick={() => dispatch(setPage(APIOverview))}>Overview</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(APIOverview))}>Store</MenuItem>
                </MenuSection>
                <MenuSection eventKey={"style"} title="Style" onClick={() => dispatch(setSubSection('style'))}>
                    <MenuItem onClick={() => dispatch(setPage(DatabaseOverview))}>Overview</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(DatabaseOverview))}>Bootstrap</MenuItem>
                </MenuSection>
            </Accordion>
        </Container>
    )
}

const MenuSection = ({eventKey, title, onClick, children}) => {
    return (
        <Card>
            <Accordion.Toggle onClick={() => onClick(eventKey)} as={Card.Header} eventKey={eventKey}>{title}</Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body style={{padding: '0'}}>
                    <ListGroup variant="flush">
                        {children}
                    </ListGroup>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
};

const MenuItem = ({onClick, children}) => {
    return (
        <ListGroup.Item
            action
            onClick={onClick}
        >&nbsp;&nbsp;{children}</ListGroup.Item>
    )
}

export default FrontendSideMenu
