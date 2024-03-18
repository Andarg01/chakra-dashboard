
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import Statics from "./Statics";
import AnalyticalPage from "../pages/Analytics";
import FullAnalyticsPage from "./AnalyticalCard";
import ReviewPage from "../pages/ReviewPage";

export {};
// Sample data for demonstration purposes
const productData = [
  { category: "Category A", count: 20 },
  { category: "Category B", count: 15 },
  { category: "Category C", count: 10 },
  { category: "Category D", count: 20 },
  { category: "Category E", count: 15 },
  { category: "Category F", count: 10 },
  { category: "Category G", count: 20 },
  { category: "Category H", count: 15 },
  { category: "Category I", count: 10 },
];

const categoryData = [
  { shop: "Shop A", count: 5 },
  { shop: "Shop B", count: 8 },
  { shop: "Shop C", count: 12 },
  { shop: "Shop D", count: 5 },
  { shop: "Shop E", count: 8 },
  { shop: "Shop F", count: 12 },
  { shop: "Shop G", count: 5 },
  { shop: "Shop H", count: 8 },
  { shop: "Shop I", count: 12 },
];

const shopData = [
  { name: "Shop A", value: 30 },
  { name: "Shop B", value: 40 },
  { name: "Shop C", value: 30 },
  { name: "Shop D", value: 30 },
  { name: "Shop E", value: 40 },
  { name: "Shop F", value: 30 },
  { name: "Shop G", value: 30 },
  { name: "Shop H", value: 40 },
  { name: "Shop I", value: 30 },
];

const reviewData = [
  { date: "2024-01-01", rating: 4 },
  { date: "2024-02-01", rating: 3.5 },
  { date: "2024-03-01", rating: 4.2 },
  { date: "2024-04-01", rating: 4 },
  { date: "2024-05-01", rating: 3.5 },
  { date: "2024-06-01", rating: 4.2 },
  { date: "2024-07-01", rating: 4 },
  { date: "2024-08-01", rating: 3.5 },
  { date: "2024-09-01", rating: 4.2 },
];

const Dashboard: React.FC = () => {
  // Helper function to calculate average rating
  const getAverageRating = (data: { rating: number }[]): number => {
    const totalRating = data.reduce((acc, curr) => acc + curr.rating, 0);
    return totalRating / data.length;
  };

  return (
    <Flex
      flexWrap="wrap"
      justify="around"
      align="center"
      direction={["column", "row"]}
    >
      <FullAnalyticsPage/>
      
      {/* Product Statistics */}
      <Box
        flex="1"
        boxShadow="xl"
        borderRadius="lg"
        p={6}
        m={4}
        maxW="600px"
        textAlign="center"
      >
        <Text fontSize="xl" mb={4}>
          Product Statistics
        </Text>
        <BarChart width={400} height={300} data={productData}>
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#00800080" />
        </BarChart>
      </Box>
      <Box
       flex="1"
       boxShadow="xl"
       borderRadius="lg"
       p={6}
       m={4}
       maxW="600px"
       textAlign="center"
      >
      <Statics/>
      </Box>
     

      {/* Category Statistics */}
      <Box
        flex="1"
        boxShadow="xl"
        borderRadius="lg"
        p={6}
        m={4}
        maxW="400px"
        textAlign="center"
      >
        <Text fontSize="xl" mb={4}>
          Category Statistics
        </Text>
        <AreaChart width={400} height={300} data={categoryData}>
          <Tooltip />
          <Area type="monotone" dataKey="count" fill="#00800080" />
        </AreaChart>
      </Box>

      {/* Shop Statistics */}
      <Box
        flex="1"
        boxShadow="xl"
        borderRadius="lg"
        p={6}
        m={4}
        maxW="400px"
        textAlign="center"
      >
        <Text fontSize="xl" mb={4}>
          Shop Statistics
        </Text>
        <PieChart width={400} height={300}>
          <Pie
            data={shopData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="rgba(0, 128, 0, 0.8)" // Transparent dark-green color
            label
            dataKey="value" // Add dataKey here
          >
            {shopData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#00800080" />
            ))}
          </Pie>
        </PieChart>
      </Box>

      {/* Review Statistics */}
      <Flex direction="row" justify="between">
      <Box
        flex="1"
        boxShadow="xl"
        borderRadius="lg"
        p={6}
        m={4}
        maxW="700px"
        textAlign="center"
        
      >
        <Text fontSize="xl" mb={4}>
          Review Statistics
        </Text>
        <LineChart width={400} height={300} data={reviewData}>
          <Tooltip />
          <Line type="monotone" dataKey="rating" stroke="rgba(0, 128, 0, 0.8)" />
        </LineChart>
        <Box textAlign="left">
          <Text fontSize="lg">
            Average Rating: {getAverageRating(reviewData)}
          </Text>
          <Text fontSize="lg">Total Reviews: {reviewData.length}</Text>
          <Box>
          <ReviewPage/>
          </Box>
         
        </Box>
        
          
        
      </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
















// // // Dashboard.tsx
// // import React from 'react';
// // import { Box, Text, SimpleGrid, Flex } from '@chakra-ui/react';
// // import { GiShoppingCart, GiCash, GiReceiveMoney, GiTwoCoins, GiShoppingBag, GiMultipleTargets } from 'react-icons/gi';
// // // import Statics from './Statics';
// // import StatisticsPage from './StatisticsPage';

// // interface DashboardCardProps {
// //   title: string;
// //   value: number;
// //   index: number;
// //   isCurrency?: boolean;
// // }

// // const iconComponents = [
// //   GiShoppingCart,   // Total Orders
// //   GiCash,           // Total Sales
// //   GiReceiveMoney,   // Total Revenue
// //   GiTwoCoins,       // Total Customer Commits
// //   GiShoppingBag,    // Total Products
// //   GiMultipleTargets // Total Categories
// // ];

// // const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, index, isCurrency = false }) => {
// //   const IconComponent = iconComponents[index];

// //   const formattedValue = isCurrency ? `Birr ${value.toLocaleString()}` : value;

// //   return (
// //     <Box
// //       p="4"
// //       borderRadius="lg"
// //       border="1px solid"
// //       borderColor="gray.200"
// //       boxShadow="xl"
// //       textAlign="center"
// //       minH={`calc(100px + 1/3 * 100px)`} // Maximize height and add 1/3 of the size
// //       fontSize="2xl"
// //       color="black" // Set text color to black
// //       display="inline-flex"
// //       flexDirection="column"
// //       alignItems="center"
// //     >
// //       <Flex alignItems="center">
// //         <IconComponent size={40}  fontWeight="bold" />
// //         <Text fontWeight="bold" ml="2" mr="2">
// //           {title}
// //         </Text>
// //       </Flex>
// //       <Text>{formattedValue}</Text>
// //     </Box>
// //   );
// // };

// // const Dashboard: React.FC = () => {
// //   // Dummy data for demonstration
// //   const metricsData = {
// //     totalOrders: 150,
// //     totalSales: 50000,
// //     totalRevenue: 75000,
// //     totalCustomerCommits: 80,
// //     totalProducts: 50,
// //     totalCategories: 10,
// //   };

// //   return (
// //     <Box p="8">
// //       <Text fontSize="3xl" fontWeight="bold" mb="6">
// //         Dashboard
// //       </Text>
// //       {/* <Statics/> */}
// //       <StatisticsPage/>
// //       <SimpleGrid columns={[1, 2, 3, 3]} spacing="4">
// //         <DashboardCard title="Total Orders" value={metricsData.totalOrders} index={0} />
// //         <DashboardCard title="Total Sales" value={metricsData.totalSales} index={1} isCurrency />
// //         <DashboardCard title="Total Revenue" value={metricsData.totalRevenue} index={2} isCurrency />
// //         <DashboardCard title="Total Customer Commits" value={metricsData.totalCustomerCommits} index={3} />
// //         <DashboardCard title="Total Products" value={metricsData.totalProducts} index={4} />
// //         <DashboardCard title="Total Categories" value={metricsData.totalCategories} index={5} />
// //       </SimpleGrid>
// //     </Box>
// //   );
// // };

// // export default Dashboard;





// // // // Dashboard.tsx
// // // import React from 'react';
// // // import { Box, Text, SimpleGrid, Flex } from '@chakra-ui/react';
// // // import { GiShoppingCart, GiCash, GiReceiveMoney, GiTwoCoins, GiShoppingBag, GiMultipleTargets } from 'react-icons/gi';

// // // interface DashboardCardProps {
// // //   title: string;
// // //   value: number;
// // //   index: number;
// // //   isCurrency?: boolean;
// // // }

// // // const iconComponents = [
// // //   GiShoppingCart,   // Total Orders
// // //   GiCash,           // Total Sales
// // //   GiReceiveMoney,   // Total Revenue
// // //   GiTwoCoins,       // Total Customer Commits
// // //   GiShoppingBag,    // Total Products
// // //   GiMultipleTargets // Total Categories
// // // ];

// // // const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, index, isCurrency = false }) => {
// // //   const colors = ['rgba(159, 122, 234, 0.7)', 'rgba(237, 100, 166, 0.7)']; // Purple, Pink with transparency
// // //   const backgroundColor = colors[index % colors.length];

// // //   const IconComponent = iconComponents[index];

// // //   const formattedValue = isCurrency ? `Birr ${value.toLocaleString()}` : value;

// // //   return (
// // //     <Box
// // //       p="4"
// // //       borderRadius="lg"
// // //       boxShadow="xl"
// // //       textAlign="center"
// // //       minH={`calc(100px + 1/3 * 100px)`} // Maximize height and add 1/3 of the size
// // //       fontSize="2xl"
// // //       color="white"
// // //       backgroundColor={backgroundColor}
// // //       display="inline-flex"
// // //       flexDirection="column"
// // //       alignItems="center"
// // //     >
// // //       <Flex alignItems="center">
// // //         <IconComponent size={40} mb="-2" fontWeight="bold" />
// // //         <Text fontWeight="bold" ml="2" mr="2">
// // //           {title}
// // //         </Text>
// // //       </Flex>
// // //       <Text>{formattedValue}</Text>
// // //     </Box>
// // //   );
// // // };

// // // const Dashboard: React.FC = () => {
// // //   // Dummy data for demonstration
// // //   const metricsData = {
// // //     totalOrders: 150,
// // //     totalSales: 50000,
// // //     totalRevenue: 75000,
// // //     totalCustomerCommits: 80,
// // //     totalProducts: 50,
// // //     totalCategories: 10,
// // //   };

// // //   return (
// // //     <Box p="8">
// // //       <Text fontSize="3xl" fontWeight="bold" mb="6">
// // //         Dashboard
// // //       </Text>

// // //       <SimpleGrid columns={[1, 2, 3, 3]} spacing="4">
// // //         <DashboardCard title="Total Orders" value={metricsData.totalOrders} index={0} />
// // //         <DashboardCard title="Total Sales" value={metricsData.totalSales} index={1} isCurrency />
// // //         <DashboardCard title="Total Revenue" value={metricsData.totalRevenue} index={2} isCurrency />
// // //         <DashboardCard title="Total Customer Commits" value={metricsData.totalCustomerCommits} index={3} />
// // //         <DashboardCard title="Total Products" value={metricsData.totalProducts} index={4} />
// // //         <DashboardCard title="Total Categories" value={metricsData.totalCategories} index={5} />
// // //       </SimpleGrid>
// // //     </Box>
// // //   );
// // // };

// // // export default Dashboard;



















