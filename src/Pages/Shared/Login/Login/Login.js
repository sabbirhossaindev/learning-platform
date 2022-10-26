import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

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
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            });
    };


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