import {Col, Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

export const NavigationBar = () => {
    return (
        <Container className='col-12 fixed-bottom p-4 lh-1'>
            <Row>
                <Col lg={6} className={'m-auto'}>
                    <Nav className='col-6 m-auto text-center d-flex flex-row'>
                        <Nav.Item className='col'>
                            <Link to={'/'}><i className={'fa fa-home'} />&nbsp; Início</Link>
                        </Nav.Item>
                        <Nav.Item className='col'>
                            <Link to={'/about'}><i className='fa fa-user-circle' />&nbsp; Sobre</Link>
                        </Nav.Item>
                        <Nav.Item className='col'>
                            <Link to={'contact'}><i className='fa fa-contact-book' />&nbsp; Contacto</Link>
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