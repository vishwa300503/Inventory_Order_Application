import React from 'react';
import { Container, Table } from 'react-bootstrap';
import '../App.css';
import Header from './Header';

const orderHistoryData = [
  { id: 1, date: '2024-10-12', status: 'Completed', total: 300 },
  { id: 2, date: '2024-10-14', status: 'Pending', total: 500 },
];

function OrderHistory() {
  return (
    <Container 
      style={{ 
        backgroundColor: '#f0f8ff', // Light background color
        minHeight: '100vh', // Full height to cover the viewport
        padding: '20px', 
        borderRadius: '10px' 
      }}
    >
      <Header />
      <h2 style={{ color: '#020120' }}>Order History</h2>
      <Table 
        striped 
        bordered 
        hover 
        style={{ 
          backgroundColor: '#ffffff', // Table background color
          borderRadius: '10px',
          overflow: 'hidden' // To ensure border-radius is effective
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: '#ffffff' }}> {/* Header background color */}
            <th>#</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderHistoryData.map((order, index) => (
            <tr 
              key={order.id} 
              style={{ transition: 'background-color 0.3s' }} // Smooth transition for hover effect
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e7f0ff'} // Light blue on hover
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'} // Revert to white
            >
              <td>{index + 1}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default OrderHistory;
