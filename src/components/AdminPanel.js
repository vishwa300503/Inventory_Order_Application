import React, { useState } from 'react';
import { Container, Card, Table, Button, Form } from 'react-bootstrap';
import Header from './Header';

const initialProducts = [
  { id: 1, name: 'Product 1', price: 100, stock: 10 },
  { id: 2, name: 'Product 2', price: 200, stock: 5 },
];

function AdminPanel() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock) {
      const updatedProducts = [...products, { id: products.length + 1, ...newProduct }];
      setProducts(updatedProducts);
      setNewProduct({ name: '', price: '', stock: '' }); // Reset form after adding
    }
  };

  return (
    <Container style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <Header />
      <Card style={{ borderRadius: '10px', border: 'none', overflow: 'hidden' }}>
        <Card.Body>
          <h2 style={{ backgroundColor: '#020120', color: '#ffffff', padding: '20px', textAlign: 'center' }}>
            Admin Panel
          </h2>
          <h4 style={{ textAlign: 'center', margin: '20px 0' }}>Manage Products</h4>
          <Form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }}>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                style={{ borderRadius: '5px', border: '1px solid #ced4da' }}
              />
            </Form.Group>

            <Form.Group controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                style={{ borderRadius: '5px', border: '1px solid #ced4da' }}
              />
            </Form.Group>

            <Form.Group controlId="formProductStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter stock"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                style={{ borderRadius: '5px', border: '1px solid #ced4da' }}
              />
            </Form.Group>

            <Button 
              style={{ backgroundColor: '#020120', color: '#ffffff', borderRadius: '5px' }} 
              type="submit" 
              className="w-100"
            >
              Add Product
            </Button>
          </Form>

          <h4 style={{ marginTop: '20px' }}>Product List</h4>
          <Table striped bordered hover style={{ marginTop: '20px' }}>
            <thead>
              <tr style={{ backgroundColor: '#020120', color: '#ffffff' }}>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AdminPanel;
