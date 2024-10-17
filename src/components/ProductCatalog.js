import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal, ListGroup, Form } from 'react-bootstrap';
import Header from './Header';
import '../App.css';

const productsData = [
  {
    id: 1,
    name: 'Watches',
    price: 50,
    stock: 10,
    image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/9806973a.webp',
    category: 'Watches',
  },
  {
    id: 2,
    name: ' Watches',
    price: 200,
    stock: 5,
    image: 'https://th.bing.com/th/id/OIP.LzQHKq4yd9ZJkw-GxWYspgHaFj?rs=1&pid=ImgDetMain',
    category: 'Watches', 
  },
  {
    id: 3,
    name: ' clutcher',
    price: 100,
    stock: 0,
    image: 'https://m.media-amazon.com/images/I/61WLYZPRMwL._SL1113_.jpg',
    category: 'Accessories', 
  },
  {
    id: 4,
    name: 'Watches',
    price: 1500,
    stock: 8,
    image: 'https://th.bing.com/th/id/OIP.wgWAJlRMKVxbDGAYCulLZwHaHa?rs=1&pid=ImgDetMain',
    category: 'Watches', 
  },
  {
    id: 5,
    name: 'Cloth',
    price: 2500,
    stock: 2,
    image: 'https://th.bing.com/th/id/OIP.DZDYmr-uTL_KHAiCD4MkTAAAAA?rs=1&pid=ImgDetMain',
    category: 'Fashion', 
  },
  {
    id: 6,
    name: 'Cloth',
    price: 1000,
    stock: 5,
    image: 'https://th.bing.com/th/id/OIP.W8R-GLd7NY_Wjrqknnf2mwHaLH?rs=1&pid=ImgDetMain',
    category: 'Fashion', 
  },
  {
    id: 7,
    name: ' clutcher',
    price: 320,
    stock: 30,
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/HV/QK/KL/122712587/butterfly-chain-metal-hair-clutcher-500x500.jpg',
    category: 'Accessories', 
  },
  {
    id: 8,
    name: ' Bands',
    price: 120,
    stock: 100,
    image: 'https://i5.walmartimages.com/asr/6d12d2e7-eef2-46c3-a023-66472da12a48.9665a78081ef9ea81c2c3ca8eb1e5a39.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
    category: 'Accessories', 
  },
  {
    id: 9,
    name: ' Cloth',
    price: 990,
    stock: 3,
    image: 'https://www.stylevore.com/wp-content/thumb/2019/12/9700cb91b772cbc85cbb8d81211c02f3.jpg',
    category: 'Fashion', 
  },
];

const categories = [...new Set(productsData.map(product => product.category))]; 

function ProductCatalog() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); 

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const filteredProducts = productsData.filter((product) => {
    const matchesPriceFilter = () => {
      if (priceFilter === 'under100') return product.price < 100;
      if (priceFilter === 'under500') return product.price >= 100 && product.price < 500;
      if (priceFilter === 'under2500') return product.price >= 500 && product.price < 2500;
      return true;
    };

    const matchesCategoryFilter = () => {
      return selectedCategory ? product.category === selectedCategory : true;
    };

    return matchesPriceFilter() && matchesCategoryFilter();
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'lowToHigh') {
      return a.price - b.price;
    } else if (sortOption === 'highToLow') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <Container>
      <Header /> 
      <h2>Product Catalog</h2>

      <Form.Group controlId="filterPrice">
        <Form.Label>Filter by Price</Form.Label>
        <Form.Control
          as="select"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="under100">Under $100</option>
          <option value="under500">Under $500</option>
          <option value="under2500">Under $2500</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="filterCategory">
        <Form.Label>Filter by Category</Form.Label>
        <Form.Control
          as="select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="sortProducts">
        <Form.Label>Sort by Price</Form.Label>
        <Form.Control
          as="select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </Form.Control>
      </Form.Group>

      <Row>
        {sortedProducts.map((product) => (
          <Col key={product.id} md={4}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Stock: {product.stock}</Card.Text>
                <Button
                  style={{ backgroundColor: "#020120" }}
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length > 0 ? (
            <ListGroup>
              {cart.map((item, index) => (
                <ListGroup.Item key={index}>
                  <strong>{item.name}</strong> - ${item.price}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "#020120" }} onClick={handleCloseCart}>
            Close
          </Button>
          <Button style={{ backgroundColor: "#020120" }} onClick={() => alert('Checkout functionality here!')}>
            Proceed to Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProductCatalog;
