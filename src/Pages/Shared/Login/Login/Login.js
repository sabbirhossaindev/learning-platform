import { GoogleAuthProvider, GithubAuthProvider  } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import {FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { user, signIn, setLoading } = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        .catch(error => console.log(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        .catch(error => console.log(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            });
    };

    if (user) {
        console.log(user);
        return navigate(from, {replace: true})
    }
    return (
        <Container className='mx-auto'>
            <Form onSubmit={handleSubmit}>
                <div>
                    <h1 className='text-center text-info m-2'>Please Login !</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FcGoogle></FcGoogle>  Login With Google</Button>
                    <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub>  Login With Github</Button>
                </ButtonGroup>
                
                <div className='mt-3'>
                    <Link to='/register'>Please register</Link>
                </div>
                <Form.Text className="text-danger">
                    <div>
                        {error}
                    </div>
                </Form.Text>

                <Button variant="primary" type="submit" className='mt-3 mb-3'>
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;