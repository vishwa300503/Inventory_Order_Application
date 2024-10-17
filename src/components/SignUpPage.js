import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import '../App.css';
import Header from './Header';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill out all fields');
    } else {
      setError('');
      // Add logic for successful signup, e.g., API call
      alert(`Signed up as ${role}: ${email}`);
    }
  };

  return (
    <Container 
      style={{ 
        backgroundColor: '#f8f9fa', // Light grey background for the entire container
        padding: '40px',
        borderRadius: '8px', 
        minHeight: '100vh',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for elevation
      }}
    >
      <Header /> 
      <h2 style={{ color: '#020120', textAlign: 'center' }}>Sign Up</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSignUp}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderRadius: '8px' }} // Rounded corners
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderRadius: '8px' }} // Rounded corners
          />
        </Form.Group>

        <Form.Group controlId="formRole">
          <Form.Label>Role</Form.Label>
          <Form.Control
            as="select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ borderRadius: '8px' }} // Rounded corners
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </Form.Control>
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          style={{ 
            backgroundColor: "#020120", // Button color
            borderRadius: '8px',
            border: 'none',
            transition: 'background-color 0.3s', // Smooth transition on hover
          }} 
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003366'} // Darker blue on hover
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#020120'} // Original color on mouse leave
        >
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}

export default SignUpPage;
