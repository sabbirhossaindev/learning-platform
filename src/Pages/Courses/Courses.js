import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <Container>
            <Row>
                <Col lg="4">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="8">
                    <div>
                        {
                            courses.map(course => <RightSideNav
                                key={course._id}
                                course={course}
                            ></RightSideNav>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;