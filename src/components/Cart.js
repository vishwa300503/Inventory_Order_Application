import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import '../App.css';

function Cart({ cart }) {
  const handleCheckout = () => {
    // Implement checkout functionality here
  };

  return (
    <Container style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#020120', marginBottom: '20px' }}>Cart</h2>
      <Table striped bordered hover style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}>
        <thead style={{ backgroundColor: '#020120', color: '#ffffff' }}>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>Your cart is empty</td>
            </tr>
          )}
        </tbody>
      </Table>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button 
          variant="success" 
          onClick={handleCheckout} 
          style={{ backgroundColor: '#28a745', borderColor: '#28a745', borderRadius: '5px' }}
        >
          Checkout
        </Button>
      </div>
    </Container>
  );
}

export default Cart;
