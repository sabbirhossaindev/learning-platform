import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const CourseDetails = () => {
    const course_details = useLoaderData();
    const {title, course_fee, details, image_url, duration, rating, badge, number} = course_details
    console.log(course_details);
    return (
        <Container className='align-items-center justify-content-center '>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                    <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <div className='mb-2'>
                    <h5>Rating: {rating.number}</h5>
                    <small>Badge: {rating.badge}</small>
                </div>
                <Button variant="primary">Download pdf</Button>
            </Card.Body>
            </Card>
        </Container>
    );
};

export default CourseDetails;