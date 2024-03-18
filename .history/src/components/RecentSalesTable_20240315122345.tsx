import React, { useEffect, useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Spinner } from '@chakra-ui/react';

interface SalesItem {
  id: string;
  totalAmount: number;
  status: string;
  userId: string;
  createdAt: string;
  orderItems: {
    productId: string;
    quantity: number;
    price: number;
  }[];
}

const RecentSalesTable: React.FC = () => {
  const [sales, setSales] = useState<SalesItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating fetching recent sales data from backend (replace with actual API call)
    const sampleSalesData: SalesItem[] = [
      {
        id: '1',
        totalAmount: 100.50,
        status: 'Completed',
        userId: 'user123',
        createdAt: '2024-03-15T10:30:00Z',
        orderItems: [
          { productId: 'prod1', quantity: 2, price: 25.25 },
          { productId: 'prod2', quantity: 1, price: 50.00 },
        ],
      },
      {
        id: '2',
        totalAmount: 75.20,
        status: 'Completed',
        userId: 'user456',
        createdAt: '2024-03-14T09:45:00Z',
        orderItems: [
          { productId: 'prod3', quantity: 1, price: 30.10 },
          { productId: 'prod4', quantity: 3, price: 15.00 },
        ],
      },
      {
        id: '3',
        totalAmount: 50.00,
        status: 'Completed',
        userId: 'user789',
        createdAt: '2024-03-13T14:20:00Z',
        orderItems: [
          { productId: 'prod5', quantity: 1, price: 50.00 },
        ],
      },
      {
        id: '4',
        totalAmount: 120.75,
        status: 'Completed',
        userId: 'user123',
        createdAt: '2024-03-12T11:15:00Z',
        orderItems: [
          { productId: 'prod1', quantity: 3, price: 25.25 },
          { productId: 'prod6', quantity: 2, price: 35.00 },
        ],
      },
      {
        id: '5',
        totalAmount: 90.00,
        status: 'Completed',
        userId: 'user456',
        createdAt: '2024-03-11T13:40:00Z',
        orderItems: [
          { productId: 'prod7', quantity: 2, price: 45.00 },
        ],
      },
    ];

    setSales(sampleSalesData);
    setLoading(false);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Total Amount</Th>
            <Th>Status</Th>
            <Th>User ID</Th>
            <Th>Created At</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sales.map((sale) => (
            <Tr key={sale.id}>
              <Td>{sale.id}</Td>
              <Td>${sale.totalAmount.toFixed(2)}</Td>
              <Td>{sale.status}</Td>
              <Td>{sale.userId}</Td>
              <Td>{new Date(sale.createdAt).toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default RecentSalesTable;
