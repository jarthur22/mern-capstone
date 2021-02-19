import React from 'react'
import { Accordion, Card, Container, ListGroup } from 'react-bootstrap'

//import page refs
import ServerOverview from './pages/Server.Overview.md';
import APIOverview from './pages/API.Overview.md';
import APIRoutes from './pages/API.Routes.md';

const BackendSideMenu = ({activeSection, setActiveSection, handlePageChange}) => {
    return (
        <Container style={{padding: '0'}}>
            <Accordion activeKey={activeSection === "" ? "server" : activeSection}>
                <MenuSection eventKey={"server"} title="Server" onClick={setActiveSection}>
                    <MenuItem onClick={() => handlePageChange(ServerOverview)}>Overview</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Node JS</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Express JS</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Middleware</MenuItem>
                </MenuSection>
                <MenuSection eventKey={"api"} title="API" onClick={setActiveSection}>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Overview</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>CRUD REST API</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIRoutes)}>Routes</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Websockets</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>External APIs</MenuItem>
                </MenuSection>
                <MenuSection eventKey={"database"} title="Database" onClick={setActiveSection}>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Overview</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>NoSQL Databases</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Mongoose</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>MongoDB Atlas</MenuItem>
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
