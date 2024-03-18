import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  useBreakpointValue,
} from '@chakra-ui/react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  brand: string;
  stockQuantity: number;
}

const PopularProductsPage: React.FC = () => {
  // Sample data
  const products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      price: 50,
      description: 'Description for product 1',
      imageUrl: 'https://via.placeholder.com/150',
      brand: 'Brand A',
      stockQuantity: 100,
    },
    {
      id: '2',
      name: 'Product 2',
      price: 40,
      description: 'Description for product 2',
      imageUrl: 'https://via.placeholder.com/150',
      brand: 'Brand B',
      stockQuantity: 80,
    },
    // Add more sample data here
  ];

  // Responsive table variant based on breakpoint
  const tableVariant = useBreakpointValue({ base: 'simple', sm: 'simple', md: 'striped' });

  return (
    <Box boxShadow="xl" p={6} borderRadius="xl">
      <Table variant={tableVariant} size="md" colorScheme="teal">
        <TableCaption placement="top">Popular Products</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Price ($)</Th>
            <Th>Description</Th>
            <Th>Brand</Th>
            <Th>Stock Quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>{product.price}</Td>
              <Td>{product.description}</Td>
              <Td>{product.brand}</Td>
              <Td>{product.stockQuantity}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default PopularProductsPage;
