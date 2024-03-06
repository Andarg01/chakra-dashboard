import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Analytics from './Analytics';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type SaleData = {
  date: string;
  amount: number;
};

type RevenueData = {
  month: string;
  revenue: number;
};

interface DashboardProps {
  saleData: SaleData[];
  revenueData: RevenueData[];
}

const Dashboard: React.FC<DashboardProps> = ({ saleData, revenueData }) => {
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: saleData.map((data) => data.amount),
        backgroundColor: '#F26A8D',
        borderColor: '#37305A',
        borderWidth: 2,
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: revenueData.map((data) => data.revenue),
        fill: false,
        borderColor: '#37305A',
        borderWidth: 2,
      },
    ],
  };

  return (
    <Box>
      <Analytics />
      <Flex className="flex h-screen">
        <Box className="flex-1 max-w-screen-md p-4">
          <Heading as="h3" size="lg">Sales Data</Heading>
          <Box className="border p-4 bg-white rounded shadow">
            <Bar data={barChartData} />
          </Box>
        </Box>

        <Box className="flex-1 max-w-screen-md p-4">
          <Heading as="h3" size="lg">Revenue Data</Heading>
          <Box className="border p-4 bg-white rounded shadow">
            <Line data={lineChartData} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
