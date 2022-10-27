import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CourseDetails = () => {
    const course_details = useLoaderData();
    const {title, course_fee, details, image_url, duration, rating,} = course_details
    console.log(course_details);
    return (
        <Container className=''>
            <Row>
                <Col></Col>
                <Col >
                    <div ref={ref}>
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
                            <Pdf targetRef={ref} filename="code-example.pdf">
                                {({ toPdf }) => <Button onClick={toPdf} variant="primary">Download pdf</Button>}
                            </Pdf>
                        </Card.Body>
                        </Card>
                     </div>
                </Col>
                
                <Col></Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;