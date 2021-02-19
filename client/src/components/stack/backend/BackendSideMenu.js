import React from 'react'
import { Accordion, Card, Container, ListGroup } from 'react-bootstrap'

//import page refs
import APIOverview from './pages/API.Overview.md';
import APIRoutes from './pages/API.Routes.md';

const BackendSideMenu = ({handlePageChange}) => {
    return (
        <Container style={{padding: '0'}}>
            <Accordion>
                <MenuSection title="Server">
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Overview</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Node JS</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Express JS</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Middleware</MenuItem>
                </MenuSection>
                <MenuSection title="API">
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Overview</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>CRUD REST API</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIRoutes)}>Routes</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Websockets</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>External APIs</MenuItem>
                </MenuSection>
                <MenuSection title="Database">
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Overview</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>NoSQL Databases</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>Mongoose</MenuItem>
                    <MenuItem onClick={() => handlePageChange(APIOverview)}>MongoDB Atlas</MenuItem>
                </MenuSection>
            </Accordion>
        </Container>
    )
}

const MenuSection = ({title, children}) => {
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={title}>{title}</Accordion.Toggle>
            <Accordion.Collapse eventKey={title}>
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
