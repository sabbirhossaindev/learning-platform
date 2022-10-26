import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const RightSideNav = ({ course }) => {
    const {image_url, _id, title} = course;
    console.log(course);

    return (
        <Container className='mb-5'>
            <Row>
                <Col md="8">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                                <Card.Title>{title}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Link to={`/course/${_id}`}><Button variant="primary">Go somewhere</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RightSideNav;