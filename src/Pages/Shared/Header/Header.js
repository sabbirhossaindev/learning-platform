import React, { } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import { HiUserCircle } from "react-icons/hi";
import '../Header/Header.css';
import logo from '../../../assets/awe.png'

const Header = () => {
    // const { user, logOut } = useContext(AuthContext);

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch((error) => console.error(error))
    // }


    return (
        <section>
            <Navbar collapseOnSelect className='mb-4' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/'className='web-name'><img src={logo} alt="" className='logo mx-2' /> Awesome Courses</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto gap-4">
                        <Link className='link' to="/home">Home</Link>
                        <Link className='link' to="/Courses">Courses</Link>  
                        <Link className='link' to="/blog">Blog</Link>
                        <Link className='link' to="/faq">FAQ</Link>  
                    </Nav>
                    <Nav>
                        {/* <>
                                
                            {
                                user?.uid ?
                                    <>
                                        <span className='me-2 mt-2'>{user?.displayName}</span> 
                                        <Button className='me-2' variant="dark" onClick={handleLogOut}>Log out</Button>
                                    </> 
                                        :
                                    <>
                                        <Link to='/login' className='me-2 text-dark'>Login</Link>
                                        <Link to='/register' className='text-dark'>Register</Link>
                                    </>    
                            }
                                
                        </> */}
                        {/* <Link to='/profile'>
                                
                            {
                                user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>          
                                :      
                                <HiUserCircle></HiUserCircle>
                        }  
                       
                        </Link> */}
                    </Nav>    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default Header;