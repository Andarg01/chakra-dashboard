import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  ChakraProvider,
} from '@chakra-ui/react';

const AnalyticsPage: React.FC = () => {
  // Sample data
  const customerReviewData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Customer Reviews',
        data: [5, 70, 100, 8, 12, 15, 98, 78, 5, 56, 37, 99],
        borderColor: '#37305A',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const ordersData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Orders',
        data: [20, 25, 18, 30, 22, 28, 40, 50, 30, 70, 80, 34],
        backgroundColor: '#F26A8D',
        borderColor: '#37305A',
        borderWidth: 2,
      },
    ],
  };

  const productsData = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9', 'Category 10'],
    datasets: [
      {
        label: 'Products',
        data: [50, 75, 60, 45, 80, 90, 50, 70, 30, 90],
        backgroundColor: '#37305A',
        borderColor: '#37305A',
        borderWidth: 2,
      },
    ],
  };

  return (
    <ChakraProvider>
      <>
        {/* ... (same as before) */}

        <SimpleGrid columns={[1, 2, 3]} gap={8} w='full'>
          {/* Customer Reviews Chart */}
          <Box bg='white' p={4} rounded='lg' shadow='lg'>
            <Text fontSize='xl' fontWeight='bold' mb={4}>
              Customer Reviews
            </Text>
            <Line data={customerReviewData} />
          </Box>

          {/* Orders Chart */}
          <Box bg='white' p={4} rounded='lg' shadow='lg'>
            <Text fontSize='xl' fontWeight='bold' mb={4}>
              Orders
            </Text>
            <Bar data={ordersData} />
          </Box>

          {/* Products Chart */}
          <Box bg='white' p={4} rounded='lg' shadow='lg'>
            <Text fontSize='xl' fontWeight='bold' mb={4}>
              Products
            </Text>
            <Bar data={productsData} />
          </Box>
        </SimpleGrid>
      </>
    </ChakraProvider>
  );
};

export default AnalyticsPage;
