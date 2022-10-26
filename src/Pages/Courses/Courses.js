import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg="4">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="6">
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;