import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const RightSideNav = ({ course }) => {
    const {image_url, _id, title, details} = course;
    console.log(course);

    return (
        <Container className='mb-5'>
            <Row>
                <Col></Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                                <Card.Title>{title}</Card.Title>
                            <Card.Text>
                            {details.slice(0, 100)}
                            </Card.Text>
                            <Link to={`/course/${_id}`}><Button variant="primary">By Premium</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default RightSideNav;