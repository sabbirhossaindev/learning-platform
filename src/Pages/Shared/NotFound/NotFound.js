import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../assets/error.gif'
import './NotFound.css';
import Button from 'react-bootstrap/Button';
import {BsArrowRight } from "react-icons/bs";
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        
        <Container className='text-center p-2'>
                <Row>
                    <Col>
                        <div>
                            <img src={error} alt="" className='not-fund' />
                            <Link to='/home' className='link ms-5'><Button className='mt-4' variant="warning">Go Too The Home <BsArrowRight></BsArrowRight></Button></Link>
                        </div>
                    </Col>
                </Row>
        </Container>

    );
};

export default NotFound;