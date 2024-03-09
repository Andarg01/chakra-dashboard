




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
} from 'recharts';

// Extend Chakra UI theme for custom styles
const theme = extendTheme({
  shadows: {
    xl: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
});

const SalesSplineAreaChart = () => {
  const salesData = [
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

const createLineChart = (title: string, data: any[]) => {
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
  const productData = [
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
  const reviewsData = [
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
  const revenueData = [
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

const AnalyticalPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex direction="column" p={8}>
        <SalesSplineAreaChart />
        <ProductSplineLineChart />
        <CustomerReviewsLineChart />
        <RevenuePieChart />
      </Flex>
    </ThemeProvider>
  );
};

export default AnalyticalPage;







// import React from 'react';
// import { Box, Flex, Text } from '@chakra-ui/react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   AreaChart,
//   Area,
//   PieChart,
//   Pie,
//   BarChart,
//   Bar,
//   CartesianGrid,
// } from 'recharts'; // Replace with your actual chart library components

// const revenueData = [
//   { month: 'Jan', revenue: 1500 },
//   { month: 'Feb', revenue: 2200 },
//   { month: 'Mar', revenue: 1800 },
//   { month: 'Apr', revenue: 2500 },
//   { month: 'May', revenue: 2000 },
//   { month: 'Jun', revenue: 2800 },
// ];

// const salesData = [
//   { day: 'Mon', sales: 120 },
//   { day: 'Tue', sales: 180 },
//   { day: 'Wed', sales: 150 },
//   { day: 'Thu', sales: 200 },
//   { day: 'Fri', sales: 170 },
//   { day: 'Sat', sales: 250 },
//   { day: 'Sun', sales: 220 },
// ];

// const orderData = [
//   { status: 'Pending', count: 30 },
//   { status: 'Shipped', count: 45 },
//   { status: 'Delivered', count: 25 },
// ];

// const productData = [
//   { product: 'Product A', quantity: 120 },
//   { product: 'Product B', quantity: 90 },
//   { product: 'Product C', quantity: 150 },
//   { product: 'Product D', quantity: 80 },
// ];

// const AnalyticsPage = () => {
//   return (
//     <Flex justify="space-between" align="center" p={8}>
//       {/* Revenue Data Card */}
//       <Box
//         p={6}
//         shadow="2xl"
//         borderRadius="xl"
//         bg="white"
//         width="30%"
//         minWidth="300px"
//         textAlign="center"
//       >
//         <Text fontSize="xl" fontWeight="bold" mb={4}>
//           Revenue Data
//         </Text>
//         <LineChart width={200} height={150} data={revenueData}>
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
//         </LineChart>
//       </Box>

//       {/* Sales Data Card */}
//       <Box
//         p={6}
//         shadow="2xl"
//         borderRadius="xl"
//         bg="white"
//         width="30%"
//         minWidth="300px"
//         textAlign="center"
//       >
//         <Text fontSize="xl" fontWeight="bold" mb={4}>
//           Sales Data
//         </Text>
//         <AreaChart width={200} height={150} data={salesData}>
//           <XAxis dataKey="day" />
//           <YAxis />
//           <Tooltip />
//           <Area type="monotone" dataKey="sales" stroke="#82ca9d" fill="#82ca9d" />
//         </AreaChart>
//       </Box>

//       {/* Order Data Card */}
//       <Box
//         p={6}
//         shadow="2xl"
//         borderRadius="xl"
//         bg="white"
//         width="30%"
//         minWidth="300px"
//         textAlign="center"
//       >
//         <Text fontSize="xl" fontWeight="bold" mb={4}>
//           Order Data
//         </Text>
//         <PieChart width={200} height={150}>
//           <Pie data={orderData} dataKey="count" nameKey="status" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
//           <Tooltip />
//         </PieChart>
//       </Box>

//       {/* Product Data Card */}
//       <Box
//         p={6}
//         shadow="2xl"
//         borderRadius="xl"
//         bg="white"
//         width="30%"
//         minWidth="300px"
//         textAlign="center"
//       >
//         <Text fontSize="xl" fontWeight="bold" mb={4}>
//           Product Data
//         </Text>
//         <BarChart width={200} height={150} data={productData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="product" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="quantity" fill="#82ca9d" />
//         </BarChart>
//       </Box>
//     </Flex>
//   );
// };

// export default AnalyticsPage;
