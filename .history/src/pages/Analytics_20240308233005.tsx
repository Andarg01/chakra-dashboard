import React from 'react';
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  ThemeProvider,
  extendTheme,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Legend,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart, // Added BarChart
  Bar, // Added Bar
  XAxis, // Added XAxis
  YAxis, // Added YAxis
} from 'recharts';

// Extend Chakra UI theme for custom styles
const theme = extendTheme({
  shadows: {
    xl: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
});

interface DataPoint {
  name: string;
  value: number;
}

const SalesSplineAreaChart = () => {
  const salesData: DataPoint[] = [
    { name: 'Jan', value: 1000 },
    { name: 'Feb', value: 1500 },
    { name: 'Mar', value: 1200 },
    { name: 'Apr', value: 1800 },
    { name: 'May', value: 2000 },
    { name: 'Jun', value: 2500 },
  ];

  return (
    <Box
      boxShadow="xl"
      p={4}
      borderRadius="lg"
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Text fontSize="lg" fontWeight="bold">
        Sales Spline Area Chart
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={salesData}>
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

const createLineChart = (title: string, data: DataPoint[]) => {
  return (
    <Box
      boxShadow="xl"
      p={4}
      borderRadius="lg"
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

const ProductSplineLineChart = () => {
  const productData: DataPoint[] = [
    { name: 'Jan', value: 500 },
    { name: 'Feb', value: 800 },
    { name: 'Mar', value: 1200 },
    { name: 'Apr', value: 1000 },
    { name: 'May', value: 1500 },
    { name: 'Jun', value: 1800 },
  ];

  return createLineChart('Product Spline Line Chart', productData);
};

const CustomerReviewsLineChart = () => {
  const reviewsData: DataPoint[] = [
    { name: 'Jan', value: 4.5 },
    { name: 'Feb', value: 4.2 },
    { name: 'Mar', value: 4.8 },
    { name: 'Apr', value: 4.0 },
    { name: 'May', value: 4.7 },
    { name: 'Jun', value: 4.9 },
  ];

  return createLineChart('Customer Reviews Line Chart', reviewsData);
};

const RevenuePieChart = () => {
  const revenueData: DataPoint[] = [
    { name: 'Product A', value: 5000 },
    { name: 'Product B', value: 3000 },
    { name: 'Product C', value: 2000 },
  ];

  return (
    <Box
      boxShadow="xl"
      p={4}
      borderRadius="lg"
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Text fontSize="lg" fontWeight="bold">
        Revenue Pie Chart
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie dataKey="value" data={revenueData} fill="#8884d8" label />
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

const BarGraphChart = () => {
  const barGraphData: DataPoint[] = [
    { name: 'Jan', value: 1200 },
    { name: 'Feb', value: 900 },
    { name: 'Mar', value: 1500 },
    { name: 'Apr', value: 1800 },
    { name: 'May', value: 1200 },
    { name: 'Jun', value: 2000 },
  ];

  return (
    <Box
      boxShadow="xl"
      p={4}
      borderRadius="lg"
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Text fontSize="lg" fontWeight="bold">
        Bar Graph Chart
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barGraphData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

const AnalyticalPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex direction="column" p={8}>
        <SalesSplineAreaChart />
        <ProductSplineLineChart />
        <CustomerReviewsLineChart />
        <RevenuePieChart />
        <BarGraphChart />
      </Flex>
    </ThemeProvider>
  );
};

export default AnalyticalPage;
