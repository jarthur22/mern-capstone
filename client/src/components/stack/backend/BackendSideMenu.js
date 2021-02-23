import React from 'react'
import { Accordion, Card, Container, ListGroup } from 'react-bootstrap'

//import page refs
import ServerOverview from './pages/Server.Overview.md';
import APIOverview from './pages/API.Overview.md';
import APIRoutes from './pages/API.Routes.md';
import DatabaseOverview from './pages/Database.Overview.md';
import { setPage, setSubSection } from '../../../actions/stackActions';
import {useSelector, useDispatch} from 'react-redux';

const BackendSideMenu = () => {
    const stackDetails = useSelector(state => state.stackDetails);
    const {subSection} = stackDetails;

    const dispatch = useDispatch();

    return (
        <Container style={{padding: '0'}}>
            <Accordion activeKey={subSection === "" ? "server" : subSection}>
                <MenuSection eventKey={"server"} title="Server" onClick={() => dispatch(setSubSection('server'))}>
                    <MenuItem onClick={() => dispatch(setPage(ServerOverview))}>Overview</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(APIOverview))}>Node JS</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(APIOverview))}>Express JS</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(APIOverview))}>Middleware</MenuItem>
                </MenuSection>
                <MenuSection eventKey={"api"} title="API" onClick={() => dispatch(setSubSection('api'))}>
                    <MenuItem onClick={() => dispatch(setPage(APIOverview))}>Overview</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(APIOverview))}>CRUD REST API</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(APIRoutes))}>Routes</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(APIOverview))}>Websockets</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(APIOverview))}>External APIs</MenuItem>
                </MenuSection>
                <MenuSection eventKey={"database"} title="Database" onClick={() => dispatch(setSubSection('database'))}>
                    <MenuItem onClick={() => dispatch(setPage(DatabaseOverview))}>Overview</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(APIOverview))}>NoSQL Databases</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(APIOverview))}>Mongoose</MenuItem>
                    <MenuItem onClick={() => dispatch(setPage(APIOverview))}>MongoDB Atlas</MenuItem>
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

export default BackendSideMenu
