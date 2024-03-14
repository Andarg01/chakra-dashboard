


// Dashboard.tsx
import React from 'react';
import { Box, Text, SimpleGrid, Flex } from '@chakra-ui/react';
import { GiShoppingCart, GiCash, GiReceiveMoney, GiTwoCoins, GiShoppingBag, GiMultipleTargets } from 'react-icons/gi';
// import Statics from './Statics';
import StatisticsPage from './StatisticsPage';

interface DashboardCardProps {
  title: string;
  value: number;
  index: number;
  isCurrency?: boolean;
}

const iconComponents = [
  GiShoppingCart,   // Total Orders
  GiCash,           // Total Sales
  GiReceiveMoney,   // Total Revenue
  GiTwoCoins,       // Total Customer Commits
  GiShoppingBag,    // Total Products
  GiMultipleTargets // Total Categories
];

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, index, isCurrency = false }) => {
  const IconComponent = iconComponents[index];

  const formattedValue = isCurrency ? `Birr ${value.toLocaleString()}` : value;

  return (
    <Box
      p="4"
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="xl"
      textAlign="center"
      minH={`calc(100px + 1/3 * 100px)`} // Maximize height and add 1/3 of the size
      fontSize="2xl"
      color="black" // Set text color to black
      display="inline-flex"
      flexDirection="column"
      alignItems="center"
    >
      <Flex alignItems="center">
        <IconComponent size={40}  fontWeight="bold" />
        <Text fontWeight="bold" ml="2" mr="2">
          {title}
        </Text>
      </Flex>
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
      {/* <Statics/> */}
      <StatisticsPage/>
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





// // Dashboard.tsx
// import React from 'react';
// import { Box, Text, SimpleGrid, Flex } from '@chakra-ui/react';
// import { GiShoppingCart, GiCash, GiReceiveMoney, GiTwoCoins, GiShoppingBag, GiMultipleTargets } from 'react-icons/gi';

// interface DashboardCardProps {
//   title: string;
//   value: number;
//   index: number;
//   isCurrency?: boolean;
// }

// const iconComponents = [
//   GiShoppingCart,   // Total Orders
//   GiCash,           // Total Sales
//   GiReceiveMoney,   // Total Revenue
//   GiTwoCoins,       // Total Customer Commits
//   GiShoppingBag,    // Total Products
//   GiMultipleTargets // Total Categories
// ];

// const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, index, isCurrency = false }) => {
//   const colors = ['rgba(159, 122, 234, 0.7)', 'rgba(237, 100, 166, 0.7)']; // Purple, Pink with transparency
//   const backgroundColor = colors[index % colors.length];

//   const IconComponent = iconComponents[index];

//   const formattedValue = isCurrency ? `Birr ${value.toLocaleString()}` : value;

//   return (
//     <Box
//       p="4"
//       borderRadius="lg"
//       boxShadow="xl"
//       textAlign="center"
//       minH={`calc(100px + 1/3 * 100px)`} // Maximize height and add 1/3 of the size
//       fontSize="2xl"
//       color="white"
//       backgroundColor={backgroundColor}
//       display="inline-flex"
//       flexDirection="column"
//       alignItems="center"
//     >
//       <Flex alignItems="center">
//         <IconComponent size={40} mb="-2" fontWeight="bold" />
//         <Text fontWeight="bold" ml="2" mr="2">
//           {title}
//         </Text>
//       </Flex>
//       <Text>{formattedValue}</Text>
//     </Box>
//   );
// };

// const Dashboard: React.FC = () => {
//   // Dummy data for demonstration
//   const metricsData = {
//     totalOrders: 150,
//     totalSales: 50000,
//     totalRevenue: 75000,
//     totalCustomerCommits: 80,
//     totalProducts: 50,
//     totalCategories: 10,
//   };

//   return (
//     <Box p="8">
//       <Text fontSize="3xl" fontWeight="bold" mb="6">
//         Dashboard
//       </Text>

//       <SimpleGrid columns={[1, 2, 3, 3]} spacing="4">
//         <DashboardCard title="Total Orders" value={metricsData.totalOrders} index={0} />
//         <DashboardCard title="Total Sales" value={metricsData.totalSales} index={1} isCurrency />
//         <DashboardCard title="Total Revenue" value={metricsData.totalRevenue} index={2} isCurrency />
//         <DashboardCard title="Total Customer Commits" value={metricsData.totalCustomerCommits} index={3} />
//         <DashboardCard title="Total Products" value={metricsData.totalProducts} index={4} />
//         <DashboardCard title="Total Categories" value={metricsData.totalCategories} index={5} />
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default Dashboard;



















