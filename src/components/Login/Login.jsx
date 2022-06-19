import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './Login.css';
import loginImage from '../../images/login-image.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    console.log(loginData);
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = { ...loginData };
        newLogindata[field] = value;
        setLoginData(newLogindata);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMessage(data)
                e.target.reset();

            })

    }
    return (
        <div>
            <Container>
                <Row className='mx-auto d-flex justify-content-space-between align-items-center' xs={1} md={2} lg={2}>
                    <Col xs={12} md={6} lg={4}>
                        <Form className='mx-auto my-3 px-3' onSubmit={handleSubmit}>
                            <div className='text-center my-3'>
                                <h2 className='title'>Welcome Back</h2>
                                <p>Please Login here</p>
                            </div>
                            {
                                message && (
                                    <Alert
                                        variant="danger" onClose={() => setShow(false)} dismissible
                                    >
                                        {message.error || message.token}
                                    </Alert>
                                )
                            }
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control onBlur={handleOnBlur} type="email" name="email" placeholder="Email Address *" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control onBlur={handleOnBlur} type="password" name="password" placeholder="Password *" />
                            </Form.Group>

                            <Button className='btn-trial w-100 mb-3' variant="primary" type="submit">
                                Login
                            </Button>
                            <div className='remember-forget'>
                                <Form.Group className="mb-1" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Password?" />
                                </Form.Group>
                                <p className=''>Forget password?</p>
                            </div>
                        </Form>
                    </Col>
                    <Col xs={12} md={6} lg={8}>
                        <img className='mx-auto img-fluid  px-3' src={loginImage} alt="" />
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Login;