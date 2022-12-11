import React from 'react';
import {Col, Container, Figure, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import me from '../assets/me.png';
import anime from 'animejs/lib/anime.es';


export  const Home = () => {


    anime({
        target: 'img',
        translateX:250,
        rotate: '1turn',
        backgroundColor: '#fefefe',
        duration: 800
    });

    return (
        <Container>
            <Row className={'col-12'}>
               <Col lg={6} className={'m-auto'}>
                   <Figure className='col-12 text-center'>
                       <Figure.Image width={181} height={190} src={ me }/>
                       <Figure.Caption>
                           <h4>Patrício Andrade</h4>
                           <h5>Full Stack Web Developer</h5>
                       </Figure.Caption>
                   </Figure>
               </Col>
                <Col lg={12} className={'social text-center'}>
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