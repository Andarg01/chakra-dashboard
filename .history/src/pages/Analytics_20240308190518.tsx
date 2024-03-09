// Install dependencies:
// npm install react-chartjs-2 chart.js @chakra-ui/react

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import '../styles/analytics.css';

const AnalyticsPage: React.FC = () => {
  // Sample data
  const customerReviewData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jun', 'agu', 'sep', 'oct', 'nov', 'dec'],
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
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jun', 'agu', 'sep', 'oct', 'nov', 'dec'],
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
    <>
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mb="16">
        Analytics page
      </Heading>

      <Flex gridGap="8" mb="20">
        <Box className="card1" p="4" rounded="lg" shadow="lg" flex="1" mr="4">
          <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">
            Total Sales
          </Heading>
          <Text fontSize="4xl" fontWeight="bold">
            $12,345
          </Text>
        </Box>

        <Box className="card2" p="4" rounded="lg" shadow="lg" flex="1" mr="4">
          <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">
            Total Revenue
          </Heading>
          <Text fontSize="4xl" fontWeight="bold">
            $9,876
          </Text>
        </Box>

        <Box className="card1" p="4" rounded="lg" shadow="lg" flex="1" mr="4">
          <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">
            Total Products
          </Heading>
          <Text fontSize="4xl" fontWeight="bold">
            310
          </Text>
        </Box>

        <Box className="card2" p="4" rounded="lg" shadow="lg" flex="1">
          <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">
            Total Orders
          </Heading>
          <Text fontSize="4xl" fontWeight="bold">
            98
          </Text>
        </Box>
      </Flex>

      <Flex gridGap="8" width="full">
        <Box className="customer" bg="white" p="4" rounded="lg" shadow="lg">
          <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">
            Customer Reviews
          </Heading>
          <Line data={customerReviewData} />
        </Box>

        <Box className="orders" bg="white" p="4" rounded="lg" shadow="lg">
          <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">
            Orders
          </Heading>
          <Bar data={ordersData} />
        </Box>

        <Box className="product" bg="white" p="4" rounded="lg" shadow="lg">
          <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">
            Products
          </Heading>
          <Bar data={productsData} />
        </Box>
      </Flex>
    </>
  );
};

export default AnalyticsPage;
