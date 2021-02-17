import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <Container style={{padding: '0px'}}>
          <h1 className="py-2" style={{margin: 'auto', textAlign: 'center', width: '100%'}}>
            Welcome to the Self-Descriptive MERN Stack Application
          </h1>
          <Row>
            <Col>
              <Image src="images/StackDiagram.jpg" rounded fluid/>
            </Col>
          </Row>
          <p className="py-3" style={{margin: 'auto', textAlign: 'center', width: '100%'}}>
            Check out what this app has to offer:
          </p>
          <Row sm={2} md={3} lg={4}>
            <Col>
              <Card className="mx-1 my-2">
                <Card.Header>Stack Breakdown</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Get an in-depth look at how this app functions: back to front.
                  </Card.Text>
                  <Card.Link href="/Stack">Explore...</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-1 my-2">
                <Card.Header>History</Card.Header>
                <Card.Body>
                  <Card.Text>
                    A brief history of Javascript, from ECMA to all-purpose frameworks.
                  </Card.Text>
                  <Card.Link href="/history">Explore...</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-1 my-2">
                <Card.Header>News</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Check out the latest news in advanced JS-based web development.
                  </Card.Text>
                  <Card.Link href="/news">Explore...</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-1 my-2">
                <Card.Header>Report A Bug</Card.Header>
                <Card.Body>
                  <Card.Text>
                    See something not working on the app? Let me know. Or, browse the list of open bug reports.
                  </Card.Text>
                  <Card.Link href="/report">Explore...</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-1 my-2">
                <Card.Header>About</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Learn about the dude behind the code.
                  </Card.Text>
                  <Card.Link href="/about">Explore...</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    )
}

export default Home
