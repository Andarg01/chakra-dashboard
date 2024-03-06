// Dashboard.tsx
import React from 'react';
import { Box, Text, SimpleGrid } from '@chakra-ui/react';

interface DashboardCardProps {
  title: string;
  value: number;
  index: number;
  isCurrency?: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, index, isCurrency = false }) => {
  const colors = ['#9F7AEA', '#ED64A6']; // Purple, Pink
  const backgroundColor = colors[index % colors.length];

  const formattedValue = isCurrency ? `Birr ${value.toLocaleString()}` : value;

  return (
    <Box
      p="6"
      borderRadius="lg"
      boxShadow="xl"
      textAlign="center"
      minH={`calc(100px + 1/3 * 100px)`} // Maximize height and add 1/3 of the size
      fontSize="2xl"
      color="white"
      bgGradient={`linear(to-r, ${backgroundColor}, ${backgroundColor})`}
    >
      <Text fontWeight="bold" mb="2">
        {title}
      </Text>
      <Text>{formattedValue}</Text>
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
        <DashboardCard title="Total Sales" value={metricsData.totalSales} index={1} isCurrency />
        <DashboardCard title="Total Revenue" value={metricsData.totalRevenue} index={2} isCurrency />
        <DashboardCard title="Total Customer Commits" value={metricsData.totalCustomerCommits} index={3} />
        <DashboardCard title="Total Products" value={metricsData.totalProducts} index={4} />
        <DashboardCard title="Total Categories" value={metricsData.totalCategories} index={5} />
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
