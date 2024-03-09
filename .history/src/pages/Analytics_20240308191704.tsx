import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  PieChart,
  Pie,
  BarChart,
  Bar,
  CartesianGrid,
} from 'recharts'; // Replace with your actual chart library components

const revenueData = [
  { month: 'Jan', revenue: 1500 },
  { month: 'Feb', revenue: 2200 },
  { month: 'Mar', revenue: 1800 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2000 },
  { month: 'Jun', revenue: 2800 },
];

const salesData = [
  { day: 'Mon', sales: 120 },
  { day: 'Tue', sales: 180 },
  { day: 'Wed', sales: 150 },
  { day: 'Thu', sales: 200 },
  { day: 'Fri', sales: 170 },
  { day: 'Sat', sales: 250 },
  { day: 'Sun', sales: 220 },
];

const orderData = [
  { status: 'Pending', count: 30 },
  { status: 'Shipped', count: 45 },
  { status: 'Delivered', count: 25 },
];

const productData = [
  { product: 'Product A', quantity: 120 },
  { product: 'Product B', quantity: 90 },
  { product: 'Product C', quantity: 150 },
  { product: 'Product D', quantity: 80 },
];

const AnalyticsPage = () => {
  return (
    <Flex justify="space-between" align="center" p={8}>
      {/* Revenue Data Card */}
      <Box
        p={6}
        shadow="2xl"
        borderRadius="xl"
        bg="white"
        width="30%"
        minWidth="300px"
        textAlign="center"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Revenue Data
        </Text>
        <LineChart width={200} height={150} data={revenueData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </Box>

      {/* Sales Data Card */}
      <Box
        p={6}
        shadow="2xl"
        borderRadius="xl"
        bg="white"
        width="30%"
        minWidth="300px"
        textAlign="center"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Sales Data
        </Text>
        <AreaChart width={200} height={150} data={salesData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sales" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </Box>

      {/* Order Data Card */}
      <Box
        p={6}
        shadow="2xl"
        borderRadius="xl"
        bg="white"
        width="30%"
        minWidth="300px"
        textAlign="center"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Order Data
        </Text>
        <PieChart width={200} height={150}>
          <Pie data={orderData} dataKey="count" nameKey="status" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Tooltip />
        </PieChart>
      </Box>

      {/* Product Data Card */}
      <Box
        p={6}
        shadow="2xl"
        borderRadius="xl"
        bg="white"
        width="30%"
        minWidth="300px"
        textAlign="center"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Product Data
        </Text>
        <BarChart width={200} height={150} data={productData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="quantity" fill="#82ca9d" />
        </BarChart>
      </Box>
    </Flex>
  );
};

export default AnalyticsPage;
