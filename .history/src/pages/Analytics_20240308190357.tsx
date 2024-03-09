// Install dependencies:
// npm install react-chartjs-2 chart.js @chakra-ui/react

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Box, Heading, Flex } from '@chakra-ui/react';


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
      <Heading as="h2" className="text-black font-semibold text-2xl mb-16">
        Analytics page
      </Heading>

      <Flex
        className="col-span-4 md:col-span-2 lg:col-span-1 justify-between gap-8 mb-20"
      >
        <Box className="card1-bg p-4 rounded-lg shadow-lg flex-1 mr-4">
          <Heading as="h2" className="text-xl font-bold mb-4">
            Total Sales
          </Heading>
          <p className="text-4xl font-bold">$12,345</p>
        </Box>

        <Box className="card2-bg p-4 rounded-lg shadow-lg flex-1 mr-4">
          <Heading as="h2" className="text-xl font-bold mb-4">
            Total Revenue
          </Heading>
          <p className="text-4xl font-bold">$9,876</p>
        </Box>

        <Box className="card1-bg p-4 rounded-lg shadow-lg flex-1 mr-4">
          <Heading as="h2" className="text-xl font-bold mb-4">
            Total Products
          </Heading>
          <p className="text-4xl font-bold">310</p>
        </Box>

        <Box className="card2-bg p-4 rounded-lg shadow-lg flex-1">
          <Heading as="h2" className="text-xl font-bold mb-4">
            Total Orders
          </Heading>
          <p className="text-4xl font-bold">98</p>
        </Box>
      </Flex>

      <Box className="container mx-auto my-8">
        <Flex className="chart grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-screen">
          {/* Customer Reviews Chart */}
          <Box className="customer-bg bg-white p-4 rounded-lg shadow-lg">
            <Heading as="h2" className="text-xl font-bold mb-4">
              Customer Reviews
            </Heading>
            <Line data={customerReviewData} />
          </Box>

          {/* Orders Chart */}
          <Box className="orders-bg bg-white p-4 rounded-lg shadow-lg">
            <Heading as="h2" className="text-xl font-bold mb-4">
              Orders
            </Heading>
            <Bar data={ordersData} />
          </Box>

          {/* Products Chart */}
          <Box className="product-bg bg-white p-4 rounded-lg shadow-lg">
            <Heading as="h2" className="text-xl font-bold mb-4">
              Products
            </Heading>
            <Bar data={productsData} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AnalyticsPage;
