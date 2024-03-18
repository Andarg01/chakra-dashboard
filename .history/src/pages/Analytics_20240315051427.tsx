
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface Shop { id: string; name: string; description: string; status: boolean; permissionName: string; picture: string; }
interface Order { id: string; totalAmount: number; status: string; userId: string; shopId: string; orderItems: OrderItem[]; createdAt: Date; }
interface OrderItem { id: string; orderId: string; productId: string; quantity: number; price: number; color: string; dimensions: string; weight: string; }

const sampleShops: Shop[] = [ { id: "1", name: "Shop 1", description: "Description of Shop 1", status: true, permissionName: "Permission 1", picture: "shop1.jpg", }, { id: "2", name: "Shop 2", description: "Description of Shop 2", status: true, permissionName: "Permission 2", picture: "shop2.jpg", }, ];

const sampleOrders: Order[] = [ { id: "1", totalAmount: 500, status: "Pending", userId: "1", shopId: "1", orderItems: [ { id: "1", orderId: "1", productId: "1", quantity: 2, price: 100, color: "Red", dimensions: "10x10x10", weight: "1kg", }, { id: "2", orderId: "1", productId: "2", quantity: 1, price: 200, color: "Green", dimensions: "20x20x20", weight: "2kg", }, ], createdAt: new Date(), }, ];

const Analytics: React.FC = () => {
  const salesData = sampleOrders.map((order) => ({ shop: sampleShops.find((shop) => shop.id === order.shopId)?.name || "Unknown", revenue: order.totalAmount, }));
  
  const brandDistribution: { [key: string]: string[] } = {};
  sampleShops.forEach((shop) => { brandDistribution[shop.name] = sampleProducts .filter((product) => product.shopId === shop.id) .map((product) => product.brand); });
  
  const brandCounts: { [key: string]: number } = {};
  Object.keys(brandDistribution).forEach((shopName) => { const brands = brandDistribution[shopName]; brands.forEach((brand) => { brandCounts[brand] = (brandCounts[brand] || 0) + 1; }); });

  const brandData = Object.keys(brandCounts).map((brand) => ({ brand, count: brandCounts[brand], }));

  return (
    <Flex direction="column" p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Analytics</Text>
      <Box boxShadow="xl" p={4} mb={4}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>Brand Distribution</Text>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={brandData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="brand" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <Box boxShadow="xl" p={4}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>Sales/Revenue</Text>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="shop" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Flex>
  );
};

export default Analytics;





// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   Flex,
// //   Stack,
// //   Text,
// //   ThemeProvider,
// //   extendTheme,
// // } from '@chakra-ui/react';
// // import FullAnalyticsPage from '../components/AnalyticalCard';
// // import Statics from '../components/Statics';
// // import {
// //   LineChart,
// //   Line,
// //   AreaChart,
// //   Area,
// //   BarChart,
// //   Bar,
// //   PieChart,
// //   Pie,
// //   Tooltip,
// //   ResponsiveContainer,
// // } from 'recharts';

// // // Extend Chakra UI theme for custom styles
// // const theme = extendTheme({
// //   shadows: {
// //     xl: '0 0 10px rgba(0, 0, 0, 0.2)',
// //   },
// // });

// // interface DataPoint {
// //   name: string;
// //   value: number;
// // }

// // interface ChartCardProps {
// //   title: string;
// //   chart: React.ReactNode;
// //   staticInfo: string;
// //   rate: string;
// // }

// // const ChartCard: React.FC<ChartCardProps> = ({ title, chart, staticInfo, rate }) => (
  
// //   <Box
// //     boxShadow="xl"
// //     p={4}
// //     borderRadius="lg"
// //     border="1px solid #ddd"
// //     mb={4}
// //     flexBasis={['100%', 'calc(33.33% - 8px)']}
// //     display="inline-flex"
// //   >
// //     <Stack spacing={2} width="100%">
// //       <Text fontSize={['md', 'lg']} fontWeight="bold">
// //         {title}
// //       </Text>
// //       {chart}
// //       <Box>
// //         <Text fontSize="sm" fontWeight="bold">{staticInfo}</Text>
// //         <Text fontSize="sm">{rate}</Text>
// //       </Box>
// //     </Stack>
// //   </Box>
// // );

// // const SalesSplineAreaChart: React.FC = () => {
// //   const salesData: DataPoint[] = [
// //     { name: 'Jan', value: 1000 },
// //     { name: 'Feb', value: 1500 },
// //     { name: 'Mar', value: 1200 },
// //     { name: 'Apr', value: 1800 },
// //     { name: 'May', value: 2000 },
// //     { name: 'Jun', value: 2500 },
// //     {name:  'junl', value:3000},
// //     {name: 'agu' , value:1000},
// //     {name: 'sep', value: 1500},
// //     {name:'oct' , value:1700},
// //     {name: 'nove' , value: 1900},
// //     {name: 'dec', value: 3500},


// //   ];

// //   return (
// //     <ChartCard
// //       title="Sales Spline Area Chart"
// //       chart={
// //         <ResponsiveContainer width="100%" height={300}>
// //           <AreaChart data={salesData}>
// //             <Area type="monotone" dataKey="value" stroke="#8884d8"  fill="rgba(0, 128, 0, 0.5)" />
// //             <Tooltip />
// //           </AreaChart>
// //         </ResponsiveContainer>
// //       }
// //     />
// //   );
// // };

// // const ProductSplineLineChart: React.FC = () => {
// //   const productData: DataPoint[] = [
// //     { name: 'Jan', value: 500 },
// //     { name: 'Feb', value: 800 },
// //     { name: 'Mar', value: 1200 },
// //     { name: 'Apr', value: 1000 },
// //     { name: 'May', value: 1500 },
// //     { name: 'Jun', value: 1800 },
// //     { name: 'Jula', value: 500 },
// //     { name: 'agu', value: 900 },
// //     { name: 'sep', value: 1000 },
// //     { name: 'nov', value: 2000 },
// //     { name: 'oct', value: 3000 },
// //     { name: 'dec', value: 1800 },
// //   ];

// //   return (
// //     <ChartCard
// //       title="Product Spline Line Chart"
// //       chart={
// //         <ResponsiveContainer width="100%" height={300}>
// //           <LineChart data={productData}>
// //             <Line type="monotone" dataKey="value" stroke="#8884d8" />
// //             <Tooltip />
// //           </LineChart>
// //         </ResponsiveContainer>
// //       }
// //     />
// //   );
// // };

// // const CustomerReviewsLineChart: React.FC = () => {
// //   const reviewsData: DataPoint[] = [
// //     { name: 'Jan', value: 4.5 },
// //     { name: 'Feb', value: 4.2 },
// //     { name: 'Mar', value: 4.8 },
// //     { name: 'Apr', value: 4.0 },
// //     { name: 'May', value: 4.7 },
// //     { name: 'Jun', value: 4.9 },
// //     { name: 'Jula', value: 4.5 },
// //     { name: 'agu', value: 4.1 },
// //     { name: 'sep', value: 4.2 },
// //     { name: 'nov', value: 4.0 },
// //     { name: 'oct', value: 4.5 },
// //     { name: 'dec', value: 4.9 },
    
    
// //   ];

// //   return (
// //     <ChartCard
// //       title="Customer Reviews Line Chart"
// //       chart={
// //         <ResponsiveContainer width="100%" height={300}>
// //           <LineChart data={reviewsData}>
// //             <Line type="monotone" dataKey="value" stroke="#8884d8" />
// //             <Tooltip />
// //           </LineChart>
// //         </ResponsiveContainer>
// //       }
// //     />
// //   );
// // };

// // const RevenuePieChart: React.FC = () => {
// //   const revenueData: DataPoint[] = [
    
// //     { name: 'Product A', value: 5000 },
// //     { name: 'Product B', value: 3000 },
// //     { name: 'Product C', value: 2000 },
// //     { name: 'Product D', value: 5000 },
// //     { name: 'Product E', value: 3000 },
// //     { name: 'Product F', value: 2000 },
// //     { name: 'Product G', value: 5000 },
// //     { name: 'Product H', value: 3000 },
// //     { name: 'Product I', value: 2000 },
// //   ];

// //   return (
// //     <ChartCard
// //       title="Revenue Pie Chart"
// //       chart={
// //         <ResponsiveContainer width="100%" height={300}>
// //           <PieChart>
// //             <Pie dataKey="value" data={revenueData}  fill="rgba(0, 128, 0, 0.5)" label />
// //             <Tooltip />
// //           </PieChart>
// //         </ResponsiveContainer>
// //       }
// //     />
// //   );
// // };

// // const OrderBarChart: React.FC = () => {
// //   const initialOrderData: DataPoint[] = [
// //     { name: 'Product A', value: 5000 },
// //     { name: 'Product B', value: 3000 },
// //     { name: 'Product C', value: 2000 },
// //     { name: 'Product D', value: 5000 },
// //     { name: 'Product E', value: 3000 },
// //     { name: 'Product F', value: 2000 },
// //     { name: 'Product G', value: 5000 },
// //     { name: 'Product H', value: 3000 },
// //     { name: 'Product I', value: 2000 },
// //   ];

// //   const [orderData, setOrderData] = useState<DataPoint[]>(initialOrderData);

// //   const sortByValue = () => {
// //     const sortedData = [...orderData].sort((a, b) => a.value - b.value);
// //     setOrderData(sortedData);
// //   };

// //   return (
// //     <ChartCard
// //       title="growth of Order "
// //       chart={
// //         <ResponsiveContainer width="100%" height={300}>
// //           <BarChart data={orderData}>
// //             <Bar dataKey="value"  fill="rgba(0, 128, 0, 0.5)" />
// //             <Tooltip />
// //           </BarChart>
// //         </ResponsiveContainer>
// //       }
// //     />
// //   );
// // };

// // const TopSalesDonutChart: React.FC = () => {
// //   const topSalesData: DataPoint[] = [
// //     { name: 'Product A', value: 1500 },
// //     { name: 'Product B', value: 1200 },
// //     { name: 'Product C', value: 1000 },
// //     { name: 'Product D', value: 1500 },
// //     { name: 'Product E', value: 1200 },
// //     { name: 'Product F', value: 1000 },
// //     { name: 'Product G', value: 1500 },
// //     { name: 'Product H', value: 1200 },
// //     { name: 'Product I', value: 1000 },
// //   ];

// //   return (
// //     <ChartCard
// //       title="Top Sales Donut Chart"
// //       chart={
// //         <ResponsiveContainer width="100%" height={300}>
// //           <PieChart>
// //             <Pie dataKey="value" data={topSalesData} innerRadius={60} outerRadius={80}  fill="rgba(0, 128, 0, 0.5)" label />
// //             <Tooltip />
// //           </PieChart>
// //         </ResponsiveContainer>
// //       }
// //     />
// //   );
// // };

// // const MonthlyIncomeAreaChart: React.FC = () => {
// //   const monthlyIncomeData: DataPoint[] = [
// //     { name: 'Jan', value: 5000 },
// //     { name: 'Feb', value: 6000 },
// //     { name: 'Mar', value: 7000 },
// //     { name: 'Apr', value: 8000 },
// //     { name: 'May', value: 9000 },
// //     { name: 'Jun', value: 10000 },
// //     { name: 'Jula', value: 5000 },
// //     { name: 'agu', value: 6000 },
// //     { name: 'sep', value: 7000 },
// //     { name: 'nov', value: 8000 },
// //     { name: 'oct', value: 9000 },
// //     { name: 'dec', value: 10000 },
// //   ];

// //   return (
// //     <ChartCard
// //       title="Monthly Income Area Chart"
// //       chart={
// //         <ResponsiveContainer width="100%" height={300}>
// //           <AreaChart data={monthlyIncomeData}>
// //             <Area type="monotone" dataKey="value" stroke="#8884d8"  fill="rgba(0, 128, 0, 0.5)" />
// //             <Tooltip />
// //           </AreaChart>
// //         </ResponsiveContainer>
// //       }
// //     />
// //   );
// // };

// // const StockLineChart: React.FC = () => {
// //   const stockData: DataPoint[] = [
// //     { name: 'Jan', value: 50 },
// //     { name: 'Feb', value: 55 },
// //     { name: 'Mar', value: 60 },
// //     { name: 'Apr', value: 52 },
// //     { name: 'May', value: 58 },
// //     { name: 'Jun', value: 62 },
// //     { name: 'Jula', value: 50 },
// //     { name: 'agu', value: 55 },
// //     { name: 'sep', value: 60 },
// //     { name: 'nov', value: 52 },
// //     { name: 'oct', value: 58 },
// //     { name: 'dec', value: 62 },
// //   ];

// //   return (
// //     <ChartCard
// //       title="Stock Line Chart"
// //       chart={
// //         <ResponsiveContainer width="100%" height={300}>
// //           <LineChart data={stockData}>
// //             <Line type="monotone" dataKey="value" stroke="#8884d8" />
// //             <Tooltip />
// //           </LineChart>
// //         </ResponsiveContainer>
// //       }
// //     />
// //   );
// // };

// // const DoubleStockLineChart: React.FC = () => {
// //   const stockData1: DataPoint[] = [
// //     { name: 'Jan', value: 50 },
// //     { name: 'Feb', value: 55 },
// //     { name: 'Mar', value: 60 },
// //     { name: 'Apr', value: 52 },
// //     { name: 'May', value: 58 },
// //     { name: 'Jun', value: 62 },
// //     { name: 'Jula', value: 50 },
// //     { name: 'agu', value: 55 },
// //     { name: 'sep', value: 60 },
// //     { name: 'nov', value: 52 },
// //     { name: 'oct', value: 58 },
// //     { name: 'dec', value: 62 },
// //   ];

// //   const stockData2: DataPoint[] = [
// //     { name: 'Jan', value: 40 },
// //     { name: 'Feb', value: 45 },
// //     { name: 'Mar', value: 50 },
// //     { name: 'Apr', value: 42 },
// //     { name: 'May', value: 48 },
// //     { name: 'Jun', value: 52 },
// //     { name: 'Jula', value: 50 },
// //     { name: 'agu', value: 55 },
// //     { name: 'sep', value: 60 },
// //     { name: 'nov', value: 52 },
// //     { name: 'oct', value: 58 },
// //     { name: 'dec', value: 62 },
// //   ];

// //   return (
// //     <ChartCard
// //       title="Double Stock Line Chart"
// //       chart={
// //         <ResponsiveContainer width="100%" height={300}>
// //           <LineChart>
// //             <Line type="monotone" dataKey="value" data={stockData1} stroke="#8884d8" name="Stock 1" />
// //             <Line type="monotone" dataKey="value" data={stockData2} stroke="#82ca9d" name="Stock 2" />
// //             <Tooltip />
// //           </LineChart>
// //         </ResponsiveContainer>
// //       }
// //     />
// //   );
// // };

// // const AnalyticalPage: React.FC = () => {
// //   return (
// //     <ThemeProvider theme={theme}>
// //     <Flex direction="row" flexWrap="wrap" p={3} justify="center" gap={3}>
// //       <FullAnalyticsPage/>
// //       <DoubleStockLineChart />
// //       <OrderBarChart />
// //       <ProductSplineLineChart />
// //       <RevenuePieChart />
// //       <SalesSplineAreaChart staticInfo="Total Sales" rate="$10,000" />
// //       <MonthlyIncomeAreaChart staticInfo="Monthly Income" rate="$7,000" />
// //       <CustomerReviewsLineChart staticInfo="Average Rating" rate="4.5" />
// //       <TopSalesDonutChart staticInfo="Top Product Sales" rate="$1,500" />
// //     </Flex>
// //   </ThemeProvider>
// //   );
// // };

// // export default AnalyticalPage;


















// import React, { useState } from 'react';
// import {
//   Box,
//   Flex,
//   Stack,
//   Text,
//   ThemeProvider,
//   extendTheme,
// } from '@chakra-ui/react';
// import FullAnalyticsPage from '../components/AnalyticalCard';
// import Statics from '../components/Statics';
// import {
//   LineChart,
//   Line,
//   AreaChart,
//   Area,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// // Extend Chakra UI theme for custom styles
// const theme = extendTheme({
//   shadows: {
//     xl: '0 0 10px rgba(0, 0, 0, 0.2)',
//   },
// });

// interface DataPoint {
//   name: string;
//   value: number;
// }

// interface ChartCardProps {
//   title: string;
//   chart: React.ReactNode;
// }

// const ChartCard: React.FC<ChartCardProps> = ({ title, chart }) => (
  
//   <Box
//   boxShadow="xl"
//   p={4}
//   borderRadius="lg"
//   border="1px solid #ddd"
//   mb={4}
//   flexBasis={['100%', 'calc(33.33% - 8px)']}
//   display="inline-flex"
// >
//   <Stack spacing={2} width="100%">
//     <Text fontSize={['md', 'lg']} fontWeight="bold">
//       {title}
//     </Text>
//     {chart}
//   </Stack>
// </Box>


//   // <Box
//   //   boxShadow="xl"
//   //   p={4}
//   //   borderRadius="lg"
//   //   border="1px solid #ddd"
//   //   mb={4}
//   //   flexBasis={['100%', 'calc(33.33% - 8px)']}
//   //   display="inline-flex"
//   // >
//   //   <Text fontSize={['md', 'lg']} fontWeight="bold">
//   //     {title}
//   //   </Text>
//   //   {chart}
//   // </Box>
// );

// const SalesSplineAreaChart: React.FC = () => {
//   const salesData: DataPoint[] = [
//     { name: 'Jan', value: 1000 },
//     { name: 'Feb', value: 1500 },
//     { name: 'Mar', value: 1200 },
//     { name: 'Apr', value: 1800 },
//     { name: 'May', value: 2000 },
//     { name: 'Jun', value: 2500 },
//     {name:  'junl', value:3000},
//     {name: 'agu' , value:1000},
//     {name: 'sep', value: 1500},
//     {name:'oct' , value:1700},
//     {name: 'nove' , value: 1900},
//     {name: 'dec', value: 3500},


//   ];

//   return (
//     <ChartCard
//       title="Sales transaction show "
//       chart={
//         <ResponsiveContainer width="100%" height={300}>
//           <AreaChart data={salesData}>
//             <Area type="monotone" dataKey="value" stroke="#8884d8"  fill="rgba(0, 128, 0, 0.5)" />
//             <Tooltip />
//           </AreaChart>
//         </ResponsiveContainer>
//       }
//     />
//   );
// };

// const ProductSplineLineChart: React.FC = () => {
//   const productData: DataPoint[] = [
//     { name: 'Jan', value: 500 },
//     { name: 'Feb', value: 800 },
//     { name: 'Mar', value: 1200 },
//     { name: 'Apr', value: 1000 },
//     { name: 'May', value: 1500 },
//     { name: 'Jun', value: 1800 },
//     { name: 'Jula', value: 500 },
//     { name: 'agu', value: 900 },
//     { name: 'sep', value: 1000 },
//     { name: 'nov', value: 2000 },
//     { name: 'oct', value: 3000 },
//     { name: 'dec', value: 1800 },
//   ];

//   return (
//     <ChartCard
//       title="Product statics"
//       chart={
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={productData}>
//             <Line type="monotone" dataKey="value" stroke="#8884d8" />
//             <Tooltip />
//           </LineChart>
//         </ResponsiveContainer>
//       }
//     />
//   );
// };

// const CustomerReviewsLineChart: React.FC = () => {
//   const reviewsData: DataPoint[] = [
//     { name: 'Jan', value: 4.5 },
//     { name: 'Feb', value: 4.2 },
//     { name: 'Mar', value: 4.8 },
//     { name: 'Apr', value: 4.0 },
//     { name: 'May', value: 4.7 },
//     { name: 'Jun', value: 4.9 },
//     { name: 'Jula', value: 4.5 },
//     { name: 'agu', value: 4.1 },
//     { name: 'sep', value: 4.2 },
//     { name: 'nov', value: 4.0 },
//     { name: 'oct', value: 4.5 },
//     { name: 'dec', value: 4.9 },
    
    
//   ];

//   return (
//     <ChartCard
//       title="Customer Reviews "
//       chart={
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={reviewsData}>
//             <Line type="monotone" dataKey="value" stroke="#8884d8" />
//             <Tooltip />
//           </LineChart>
//         </ResponsiveContainer>
//       }
//     />
//   );
// };

// const RevenuePieChart: React.FC = () => {
//   const revenueData: DataPoint[] = [
    
//     { name: 'Product A', value: 5000 },
//     { name: 'Product B', value: 3000 },
//     { name: 'Product C', value: 2000 },
//     { name: 'Product D', value: 5000 },
//     { name: 'Product E', value: 3000 },
//     { name: 'Product F', value: 2000 },
//     { name: 'Product G', value: 5000 },
//     { name: 'Product H', value: 3000 },
//     { name: 'Product I', value: 2000 },
//   ];

//   return (
//     <ChartCard
//       title="Revenue "
//       chart={
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie dataKey="value" data={revenueData}  fill="rgba(0, 128, 0, 0.5)" label />
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       }
//     />
//   );
// };

// const OrderBarChart: React.FC = () => {
//   const initialOrderData: DataPoint[] = [
//     { name: 'Product A', value: 5000 },
//     { name: 'Product B', value: 3000 },
//     { name: 'Product C', value: 2000 },
//     { name: 'Product D', value: 5000 },
//     { name: 'Product E', value: 3000 },
//     { name: 'Product F', value: 2000 },
//     { name: 'Product G', value: 5000 },
//     { name: 'Product H', value: 3000 },
//     { name: 'Product I', value: 2000 },
//   ];

//   const [orderData, setOrderData] = useState<DataPoint[]>(initialOrderData);

//   const sortByValue = () => {
//     const sortedData = [...orderData].sort((a, b) => a.value - b.value);
//     setOrderData(sortedData);
//   };

//   return (
//     <ChartCard
//       title="growth of Order "
//       chart={
//         <ResponsiveContainer width="100%" height={300} >
//           <BarChart data={orderData}>
//             <Bar dataKey="value"  fill="rgba(0, 128, 0, 0.5)"/>
//             <Tooltip />
//           </BarChart>
//         </ResponsiveContainer>
//       }
//     />
//   );
// };

// const TopSalesDonutChart: React.FC = () => {
//   const topSalesData: DataPoint[] = [
//     { name: 'Product A', value: 1500 },
//     { name: 'Product B', value: 1200 },
//     { name: 'Product C', value: 1000 },
//     { name: 'Product D', value: 1500 },
//     { name: 'Product E', value: 1200 },
//     { name: 'Product F', value: 1000 },
//     { name: 'Product G', value: 1500 },
//     { name: 'Product H', value: 1200 },
//     { name: 'Product I', value: 1000 },
//   ];

//   return (
//     <ChartCard
//       title="Top Sales statics"
//       chart={
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie dataKey="value" data={topSalesData} innerRadius={60} outerRadius={80}  fill="rgba(0, 128, 0, 0.5)" label />
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       }
//     />
//   );
// };

// const MonthlyIncomeAreaChart: React.FC = () => {
//   const monthlyIncomeData: DataPoint[] = [
//     { name: 'Jan', value: 5000 },
//     { name: 'Feb', value: 6000 },
//     { name: 'Mar', value: 7000 },
//     { name: 'Apr', value: 8000 },
//     { name: 'May', value: 9000 },
//     { name: 'Jun', value: 10000 },
//     { name: 'Jula', value: 5000 },
//     { name: 'agu', value: 6000 },
//     { name: 'sep', value: 7000 },
//     { name: 'nov', value: 8000 },
//     { name: 'oct', value: 9000 },
//     { name: 'dec', value: 10000 },
//   ];

//   return (
//     <ChartCard
//       title="Monthly Income statics"
//       chart={
//         <ResponsiveContainer width="100%" height={300}>
//           <AreaChart data={monthlyIncomeData}>
//             <Area type="monotone" dataKey="value" stroke="#8884d8"  fill="rgba(0, 128, 0, 0.5)" />
//             <Tooltip />
//           </AreaChart>
//         </ResponsiveContainer>
//       }
//     />
//   );
// };

// const StockLineChart: React.FC = () => {
//   const stockData: DataPoint[] = [
//     { name: 'Jan', value: 50 },
//     { name: 'Feb', value: 55 },
//     { name: 'Mar', value: 60 },
//     { name: 'Apr', value: 52 },
//     { name: 'May', value: 58 },
//     { name: 'Jun', value: 62 },
//     { name: 'Jula', value: 50 },
//     { name: 'agu', value: 55 },
//     { name: 'sep', value: 60 },
//     { name: 'nov', value: 52 },
//     { name: 'oct', value: 58 },
//     { name: 'dec', value: 62 },
//   ];

//   return (
//     <ChartCard
//       title="Stock  rate"
//       chart={
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={stockData}>
//             <Line type="monotone" dataKey="value" stroke="#8884d8" />
//             <Tooltip />
//           </LineChart>
//         </ResponsiveContainer>
//       }
//     />
//   );
// };

// const DoubleStockLineChart: React.FC = () => {
//   const stockData1: DataPoint[] = [
//     { name: 'Jan', value: 50 },
//     { name: 'Feb', value: 55 },
//     { name: 'Mar', value: 60 },
//     { name: 'Apr', value: 52 },
//     { name: 'May', value: 58 },
//     { name: 'Jun', value: 62 },
//     { name: 'Jula', value: 50 },
//     { name: 'agu', value: 55 },
//     { name: 'sep', value: 60 },
//     { name: 'nov', value: 52 },
//     { name: 'oct', value: 58 },
//     { name: 'dec', value: 62 },
//   ];

//   const stockData2: DataPoint[] = [
//     { name: 'Jan', value: 40 },
//     { name: 'Feb', value: 45 },
//     { name: 'Mar', value: 50 },
//     { name: 'Apr', value: 42 },
//     { name: 'May', value: 48 },
//     { name: 'Jun', value: 52 },
//     { name: 'Jula', value: 50 },
//     { name: 'agu', value: 55 },
//     { name: 'sep', value: 60 },
//     { name: 'nov', value: 52 },
//     { name: 'oct', value: 58 },
//     { name: 'dec', value: 62 },
//   ];

//   return (
//     <ChartCard
//       title="stock rate show"
//       chart={
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart>
//             <Line type="monotone" dataKey="value" data={stockData1} stroke="#8884d8" name="Stock 1" />
//             <Line type="monotone" dataKey="value" data={stockData2} stroke="#82ca9d" name="Stock 2" />
//             <Tooltip />
//           </LineChart>
//         </ResponsiveContainer>
//       }
//     />
//   );
// };

// const AnalyticalPage: React.FC = () => {
//   return (
//     <ThemeProvider theme={theme}>
      
//       <Flex direction="row" flexWrap="wrap" p={3} justify="center" gap={3}>
//       <FullAnalyticsPage/>
//       <SalesSplineAreaChart />
       
//         <Statics/>
//         <OrderBarChart />
//         <ProductSplineLineChart />
//         <RevenuePieChart />
        
//       {/* </Flex> */}
//       {/* <Flex direction="row" p={3} flexWrap="wrap" justify="left" gap={3}> */}
      
//       <DoubleStockLineChart />
//         <MonthlyIncomeAreaChart />
//         <CustomerReviewsLineChart />
//         <TopSalesDonutChart />
//       </Flex>
//     </ThemeProvider>
//   );
// };

// export default AnalyticalPage;












