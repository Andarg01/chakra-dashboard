// Dashboard.tsx
import React, { useState } from 'react';
import { Box, Text, SimpleGrid } from '@chakra-ui/react';

interface DashboardCardProps {
  title: string;
  value: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value }) => {
  const [currentColor, setCurrentColor] = useState<string>('#9F7AEA');

  const getNextColor = () => {
    const nextColor = currentColor === '#9F7AEA' ? '#ED64A6' : '#9F7AEA';
    setCurrentColor(nextColor);
    return nextColor;
  };

  return (
    <Box
      p="6"
      borderRadius="lg"
      boxShadow="xl"
      textAlign="center"
      minH="100px"
      fontSize="2xl"
      color="white"
      bgGradient={`linear(to-r, ${getNextColor()}, ${getNextColor()})`}
    >
      <Text fontWeight="bold" mb="2">
        {title}
      </Text>
      <Text>{value}</Text>
    </Box>
  );
};

const Dashboard: React.FC = () => {
  // Dummy data for demonstration
  const metricsData = {
    totalOrders: 150,
    totalSales: 50000,
    totalRevenue: 75000,
    totalCustomerCommits: 80,
    totalProducts: 50,
    totalCategories: 10,
  };

  return (
    <Box p="8">
      <Text fontSize="3xl" fontWeight="bold" mb="6">
        Dashboard
      </Text>

      <SimpleGrid columns={[1, 2, 3, 3]} spacing="4">
        <DashboardCard title="Total Orders" value={metricsData.totalOrders} />
        <DashboardCard title="Total Sales" value={metricsData.totalSales} />
        <DashboardCard title="Total Revenue" value={metricsData.totalRevenue} />
        <DashboardCard title="Total Customer Commits" value={metricsData.totalCustomerCommits} />
        <DashboardCard title="Total Products" value={metricsData.totalProducts} />
        <DashboardCard title="Total Categories" value={metricsData.totalCategories} />
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
