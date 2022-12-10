import {Col, Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

export const NavigationBar = () => {
    return (
        <Container>
            <Row>
                <Col lg={6} className={'m-auto'}>
                    <Nav>
                        <Nav.Item>
                            <Link to={'/'}><i className={'fa fa-home'} />Início</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={'/about'}><i className='fa fa-user-circle' />Sobre</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={'contact'}><i className='fa fa-contact-book' />Contacto</Link>
                        </Nav.Item>
                        {/*<Nav.Item>*/}
                        {/*    <Link to={''}><i className={'fa fa-instagram'} /></Link>*/}
                        {/*</Nav.Item>*/}
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}