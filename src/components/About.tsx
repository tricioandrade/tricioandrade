import React from 'react';
import {Col, Container, Figure, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";



export  const About = () => {


    return (
        <Container>
            <Row className={'col-12'}>
                <Col lg={6} className={'m-auto'}>
                    <Figure>
                        <Figure.Image width={171} height={180} src={'../assets/me.png'}/>
                    </Figure>
                </Col>
            </Row>
            <Row className={'col-12'}>
                <Col lg={6} className={'m-auto'}>
                    <Nav>
                        <Nav.Item>
                            <Link to={''}><i className={'fa fa-facebook'} /></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={''}><i className={'fa fa-twitter'} /></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={''}><i className={'fa fa-linkedin'} /></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={''}><i className={'fa fa-instagram'} /></Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}