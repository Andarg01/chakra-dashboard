// Import necessary dependencies
import React from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import { Line, Pie, ChartData } from 'react-chartjs-2';

// Sample data for demonstration
const productData: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Product Sales',
      data: [30, 45, 60, 35, 70],
      fill: true,
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.1)',
    },
  ],
};

const salesData: ChartData = {
  labels: ['Category A', 'Category B', 'Category C'],
  datasets: [
    {
      data: [40, 30, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const orderData: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Order Count',
      data: [10, 15, 20, 25, 30],
      fill: false,
      borderColor: 'green',
    },
  ],
};

const reviewsData: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Customer Reviews',
      data: [4, 3, 5, 4.5, 3.5],
      fill: true,
      borderColor: 'purple',
      backgroundColor: 'rgba(128, 0, 128, 0.1)',
    },
  ],
};

// Main App Component
const Analytics: React.FC = () => {
  return (
    
      <Box p={5}>
        <Heading mb={5}>Analytical Page</Heading>
        <Box mb={8}>
          <Heading fontSize="xl" mb={3}>
            Product Sales (Spline Area Chart)
          </Heading>
          <Line data={productData} />
        </Box>
        <Box mb={8}>
          <Heading fontSize="xl" mb={3}>
            Sales Distribution (Pie Chart)
          </Heading>
          <Pie data={salesData} />
        </Box>
        <Box mb={8}>
          <Heading fontSize="xl" mb={3}>
            Order Count (Line Chart)
          </Heading>
          <Line data={orderData} />
        </Box>
        <Box mb={8}>
          <Heading fontSize="xl" mb={3}>
            Customer Reviews (Spline Chart)
          </Heading>
          <Line data={reviewsData} />
        </Box>
      </Box>
   
  );
};

export default Analytics;
