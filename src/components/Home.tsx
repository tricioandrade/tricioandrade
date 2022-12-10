import React from 'react';
import {Col, Container, Figure, Row} from "react-bootstrap";



export  const Home = () => {


    return (
        <Container>
            <Row className={'col-12'}>
               <Col lg={6} className={'m-auto'}>
                   <Figure>
                       <Figure.Image>
                           
                       </Figure.Image>
                   </Figure>
               </Col>
            </Row>
        </Container>
    );
}