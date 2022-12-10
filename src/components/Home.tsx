import React from 'react';
import {Col, Container, Figure, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import me from '../assets/me.png'



export  const Home = () => {


    return (
        <Container>
            <Row className={'col-12'}>
               <Col lg={6} className={'m-auto'}>
                   <Figure className='col-12 text-center'>
                       <Figure.Image width={171} height={180} src={ me }/>
                   </Figure>
               </Col>
                <Col lg={12} className={' text-center'}>
                    <Nav className='col-6 m-auto text-center d-flex flex-row'>
                        <Nav.Item className='col'>
                             <Link to={''}><i className='fab fa-facebook' /></Link>
                        </Nav.Item>
                        <Nav.Item className='col'>
                            <Link to={''}><i className='fab fa-twitter' /></Link>
                        </Nav.Item>
                        <Nav.Item className='col'>
                            <Link to={''}><i className='fab fa-linkedin' /></Link>
                        </Nav.Item>
                        <Nav.Item className='col'>
                            <Link to={''}><i className='fab fa-instagram' /></Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}