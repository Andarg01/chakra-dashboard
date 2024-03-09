import React, { useState } from 'react';
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
  BarChart,
  Bar,
  PieChart as RePieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
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

interface ChartCardProps {
  title: string;
  chart: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, chart }) => (
  <Box
    boxShadow="xl"
    p={4}
    borderRadius="lg"
    bg={`rgba(0, 128, 0, 0.2)`}
    mr={4}
    width={['100%', 'calc(66.66% - 8px)']} // Adjusted width by 1/3
  >
    <Text fontSize={['md', 'lg']} fontWeight="bold">
      {title}
    </Text>
    {chart}
  </Box>
);

const SalesSplineAreaChart: React.FC = () => {
  const salesData: DataPoint[] = [
    { name: 'Jan', value: 1000 },
    { name: 'Feb', value: 1500 },
    { name: 'Mar', value: 1200 },
    { name: 'Apr', value: 1800 },
    { name: 'May', value: 2000 },
    { name: 'Jun', value: 2500 },
  ];

  return (
    <ChartCard
      title="Sales Spline Area Chart"
      chart={
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={salesData}>
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      }
    />
  );
};

const ProductSplineLineChart: React.FC = () => {
  const productData: DataPoint[] = [
    { name: 'Jan', value: 500 },
    { name: 'Feb', value: 800 },
    { name: 'Mar', value: 1200 },
    { name: 'Apr', value: 1000 },
    { name: 'May', value: 1500 },
    { name: 'Jun', value: 1800 },
  ];

  return (
    <ChartCard
      title="Product Spline Line Chart"
      chart={
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={productData}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      }
    />
  );
};

const CustomerReviewsLineChart: React.FC = () => {
  const reviewsData: DataPoint[] = [
    { name: 'Jan', value: 4.5 },
    { name: 'Feb', value: 4.2 },
    { name: 'Mar', value: 4.8 },
    { name: 'Apr', value: 4.0 },
    { name: 'May', value: 4.7 },
    { name: 'Jun', value: 4.9 },
  ];

  return (
    <ChartCard
      title="Customer Reviews Line Chart"
      chart={
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={reviewsData}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      }
    />
  );
};

const RevenuePieChart: React.FC = () => {
  const revenueData: DataPoint[] = [
    { name: 'Product A', value: 5000 },
    { name: 'Product B', value: 3000 },
    { name: 'Product C', value: 2000 },
  ];

  return (
    <ChartCard
      title="Revenue Pie Chart"
      chart={
        <ResponsiveContainer width="100%" height={300}>
          <RePieChart>
            <Pie dataKey="value" data={revenueData} fill="#8884d8" label />
            <Tooltip />
          </RePieChart>
        </ResponsiveContainer>
      }
    />
  );
};

const OrderBarChart: React.FC = () => {
  const initialOrderData: DataPoint[] = [
    { name: 'Product A', value: 5000 },
    { name: 'Product B', value: 3000 },
    { name: 'Product C', value: 2000 },
  ];

  const [orderData, setOrderData] = useState<DataPoint[]>(initialOrderData);

  const sortByValue = () => {
    const sortedData = [...orderData].sort((a, b) => a.value - b.value);
    setOrderData(sortedData);
  };

  return (
    <ChartCard
      title="Order Bar Chart"
      chart={
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={orderData}>
            <Bar dataKey="value" fill="#8884d8" />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      }
    />
  );
};

const AnalyticalPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex direction="row" p={8} flexWrap="wrap" justify="center">
        <SalesSplineAreaChart />
        <ProductSplineLineChart />
        <CustomerReviewsLineChart />
        <RevenuePieChart />
        <OrderBarChart />
      </Flex>
    </ThemeProvider>
  );
};

export default AnalyticalPage;
