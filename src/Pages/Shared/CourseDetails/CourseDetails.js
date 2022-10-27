import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';

const CourseDetails = () => {
    const course_details = useLoaderData();
    const {title, course_fee, details, image_url, duration, rating,} = course_details
    console.log(course_details);
    return (
        <Container className=''>
            <Row>
                <Col></Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                                <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details}
                            </Card.Text>
                            <div className='mb-2'>
                                <h5>Duration: {duration}</h5>
                                <h5>Rating: {rating.number}</h5>
                                <small>Badge: {rating.badge}</small>
                            </div>
                            <Card.Footer>
                                <small className="text-muted">Course Fee: {course_fee}</small>
                            </Card.Footer>
                            <Button variant="primary">Download pdf</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;