// Dashboard.tsx
import React from 'react';
import { Box, Text, SimpleGrid } from '@chakra-ui/react';

interface DashboardCardProps {
  title: string;
  value: number;
  index: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, index }) => {
  const colors = ['#9F7AEA', '#ED64A6', '#9F7AEA']; // Purple, Pink, Purple
  const backgroundColor = colors[index % colors.length];

  return (
    <Box
      p="6"
      borderRadius="lg"
      boxShadow="xl"
      textAlign="center"
      minH="100px"
      fontSize="2xl"
      color="white"
      bgGradient={`linear(to-r, ${backgroundColor}, ${backgroundColor})`}
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
        <DashboardCard title="Total Orders" value={metricsData.totalOrders} index={0} />
        <DashboardCard title="Total Sales" value={metricsData.totalSales} index={1} />
        <DashboardCard title="Total Revenue" value={metricsData.totalRevenue} index={2} />
        <DashboardCard title="Total Customer Commits" value={metricsData.totalCustomerCommits} index={3} />
        <DashboardCard title="Total Products" value={metricsData.totalProducts} index={4} />
        <DashboardCard title="Total Categories" value={metricsData.totalCategories} index={5} />
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
