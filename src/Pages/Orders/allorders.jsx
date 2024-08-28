import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const dummyOrders = [
  {
    id: 1,
    customerName: 'John Doe',
    orderDate: '2024-07-25',
    totalAmount: 199.99,
    status: 'Shipped'
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    orderDate: '2024-07-26',
    totalAmount: 299.99,
    status: 'Pending'
  },
  {
    id: 3,
    customerName: 'Alice Johnson',
    orderDate: '2024-07-27',
    totalAmount: 89.99,
    status: 'Delivered'
  },
  {
    id: 4,
    customerName: 'Bob Brown',
    orderDate: '2024-07-28',
    totalAmount: 49.99,
    status: 'Cancelled'
  }
];

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching orders from an API or data source
    const fetchOrders = () => {
      setOrders(dummyOrders);
    };

    fetchOrders();
  }, []);

  const handleViewOrder = (id) => {
    // Implement view order details functionality
    console.log('View order details for order ID:', id);
  };

  return (
    <Container style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        <b>All Orders</b>
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Tooltip title="View Order Details">
                    <IconButton color="primary" onClick={() => handleViewOrder(order.id)}>
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AllOrders;