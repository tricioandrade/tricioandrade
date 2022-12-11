import {Col, Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

export const NavigationBar = () => {
    return (
        <Container className='col-12 fixed-bottom p-4 lh-1'>
            <Row>
                <Col lg={12} className={'m-auto'}>
                    <Nav className='col-12 m-auto text-center d-flex flex-row'>
                        <Nav.Item className='col'>
                            <Link to={'/'}><div><i className={'fa fa-home'} /></div><div>Início</div></Link>
                        </Nav.Item>
                        <Nav.Item className='col'>
                            <Link to={'/about'}><div><i className='fa fa-user-circle' /></div><div>Sobre</div></Link>
                        </Nav.Item>
                        <Nav.Item className='col'>
                            <Link to={'contact'}><div><i className='fa fa-contact-book' /></div><div>Contacto</div></Link>
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