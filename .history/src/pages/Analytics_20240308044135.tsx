import React from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import { Line, Pie, ChartOptions, ChartData } from 'chart.js';
import { Line as LineChart, Pie as PieChart } from 'react-chartjs-2';

// Sample data for demonstration
const productData: ChartData<keyof ChartTypeRegistry, number[], unknown> = {
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

const salesData: ChartData<keyof ChartTypeRegistry, number[], unknown> = {
  labels: ['Category A', 'Category B', 'Category C'],
  datasets: [
    {
      data: [40, 30, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const orderData: ChartData<keyof ChartTypeRegistry, number[], unknown> = {
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

const reviewsData: ChartData<keyof ChartTypeRegistry, number[], unknown> = {
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
    <ChakraProvider>
      <Box p={5}>
        <Heading mb={5}>Analytical Page</Heading>
        <Box mb={8}>
          <Heading fontSize="xl" mb={3}>
            Product Sales (Spline Area Chart)
          </Heading>
          <LineChart data={productData} />
        </Box>
        <Box mb={8}>
          <Heading fontSize="xl" mb={3}>
            Sales Distribution (Pie Chart)
          </Heading>
          <PieChart data={salesData} />
        </Box>
        <Box mb={8}>
          <Heading fontSize="xl" mb={3}>
            Order Count (Line Chart)
          </Heading>
          <LineChart data={orderData} />
        </Box>
        <Box mb={8}>
          <Heading fontSize="xl" mb={3}>
            Customer Reviews (Spline Chart)
          </Heading>
          <LineChart data={reviewsData} />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Analytics;
