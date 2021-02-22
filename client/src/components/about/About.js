import React from 'react';
import {Card, Col, Container, Image, ListGroup, Row} from 'react-bootstrap';

const About = () => {
    return (
        <Container className="py-3">
            <h1>About Jake</h1>
            <Row className="py-4">
                <Col>
                    <Card style={{padding: '8px', width: '218px'}}>
                        <Card.Img 
                            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                            style={{height: '200px', width: '200px'}}
                        />
                    </Card>
                </Col>
                <Col>
                    <Card bg="dark">
                        <Card.Header>Professional Links</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <i className="fa fa-linkedin-square"></i>&nbsp;&nbsp;LinkedIn:
                                    </Col>
                                    <Col>
                                        <Card.Link href="https://www.linkedin.com/in/jacob-arthur-jmj/">Jacob Arthur</Card.Link>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <i className="fa fa-github"></i>&nbsp;&nbsp;Github:
                                    </Col>
                                    <Col>
                                        <Card.Link href="https://github.com/jarthur22">jarthur22</Card.Link>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <Image style={{width: '20px', marginLeft: '-5px'}} src={`${process.env.PUBLIC_URL}/images/discord.svg`} />&nbsp;Discord:
                                    </Col>
                                    <Col>
                                        <Card.Link href="https://discordapp.com/users/411189127812349963/">Ruah#1562</Card.Link>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Row>
                <p>
                    &nbsp;&nbsp;&nbsp;Hey, I'm Jake! I'm a self-taught web developer. I've been
                    programming since my first scientific calculator, a Texas Instruments
                    TI-84 that let you program in TI-BASIC. Since then I excelled at Java in 
                    high school and did a little Python and C# in college that I am proud of.
                </p>
                <p> 
                    &nbsp;&nbsp;&nbsp;But my real success has come with web development-- I learned a little of the basics
                    in college, and watched a TON of Youtube tutorials to learn Node, React, Redux,
                    MongoDB, PHP, and other technologies. I've carried these skills over to my "big boy job":
                    I work in IT but they've had me make web apps and a Wordpress "plugin" as well.
                     Now I can put a simple professional website together in a few days. I also write Discord 
                     bots for fun! Check out my Github for a list of my (public) projects!
                </p>
            </Row>
        </Container>
    )
}

export default About
