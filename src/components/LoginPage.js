import React, { useState } from 'react';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill out all fields');
    } else {
      setError('');
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/catalog');
      }
    }
  };

  return (
    <Container 
      className="d-flex justify-content-center align-items-center" 
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#e7f0ff' // Light background color
      }}
    >
      <Card 
        style={{ 
          width: '400px', 
          padding: '20px', 
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
          borderRadius: '10px' 
        }}
      >
        <Card.Body>
          <h2 className="text-center" style={{ color: '#020120' }}>Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail">
              <Form.Label style={{ color: '#020120' }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderRadius: '5px' }}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label style={{ color: '#020120' }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderRadius: '5px' }}
              />
            </Form.Group>

            <Form.Group controlId="formRole">
              <Form.Label style={{ color: '#020120' }}>Role</Form.Label>
              <Form.Control
                as="select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ borderRadius: '5px' }}
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </Form.Control>
            </Form.Group>

            <Button 
              type="submit" 
              style={{ 
                backgroundColor: "#007bff", // Bright button color
                border: 'none',
                color: '#fff',
                width: '100%',
                borderRadius: '5px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} // Darker on hover
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'} // Original color
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginPage;
