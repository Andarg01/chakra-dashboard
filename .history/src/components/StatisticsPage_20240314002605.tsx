
// import React from "react";
// import { Box, Flex, Text } from "@chakra-ui/react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
// import { AreaChart, Area } from "recharts";
// import { PieChart, Pie, Cell } from "recharts";
// import { LineChart, Line } from "recharts";

// // Sample data for demonstration purposes
// const productData = [
//   { category: "Category A", count: 20 },
//   { category: "Category B", count: 15 },
//   { category: "Category C", count: 10 },
// ];

// const categoryData = [
//   { shop: "Shop A", count: 5 },
//   { shop: "Shop B", count: 8 },
//   { shop: "Shop C", count: 12 },
// ];

// const shopData = [
//   { name: "Shop A", value: 30 },
//   { name: "Shop B", value: 40 },
//   { name: "Shop C", value: 30 },
// ];

// const reviewData = [
//   { date: "2024-01-01", rating: 4 },
//   { date: "2024-02-01", rating: 3.5 },
//   { date: "2024-03-01", rating: 4.2 },
// ];

// const StatisticsPage: React.FC = () => {
//   return (
//     <Flex justify="center" align="center" direction="column">
//       {/* Product Statistics */}
//       <Box
//         boxShadow="xl"
//         borderRadius="lg"
//         p={6}
//         m={4}
//         maxW="400px"
//         textAlign="center"
//       >
//         <Text fontSize="xl" mb={4}>
//           Product Statistics
//         </Text>
//         <BarChart width={400} height={300} data={productData}>
//           <XAxis dataKey="category" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="count" fill="#8884d8" />
//         </BarChart>
//       </Box>

//       {/* Category Statistics */}
//       <Box
//         boxShadow="xl"
//         borderRadius="lg"
//         p={6}
//         m={4}
//         maxW="400px"
//         textAlign="center"
//       >
//         <Text fontSize="xl" mb={4}>
//           Category Statistics
//         </Text>
//         <AreaChart width={400} height={300} data={categoryData}>
//           <XAxis dataKey="shop" />
//           <YAxis />
//           <Tooltip />
//           <Area type="monotone" dataKey="count" fill="#8884d8" />
//         </AreaChart>
//       </Box>

//       {/* Shop Statistics */}
//       <Box
//         boxShadow="xl"
//         borderRadius="lg"
//         p={6}
//         m={4}
//         maxW="400px"
//         textAlign="center"
//       >
//         <Text fontSize="xl" mb={4}>
//           Shop Statistics
//         </Text>
//         <PieChart width={400} height={300}>
//           <Pie
//             data={shopData}
//             cx="50%"
//             cy="50%"
//             outerRadius={100}
//             fill="#8884d8"
//             label
//           >
//             {shopData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={`#${index}8884d8`} />
//             ))}
//           </Pie>
//         </PieChart>
//       </Box>

//       {/* Review Statistics */}
//       <Box
//         boxShadow="xl"
//         borderRadius="lg"
//         p={6}
//         m={4}
//         maxW="400px"
//         textAlign="center"
//       >
//         <Text fontSize="xl" mb={4}>
//           Review Statistics
//         </Text>
//         <LineChart width={400} height={300} data={reviewData}>
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Line type="monotone" dataKey="rating" stroke="#8884d8" />
//         </LineChart>
//         <Box textAlign="left">
//           <Text fontSize="lg">Average Rating: {getAverageRating(reviewData)}</Text>
//           <Text fontSize="lg">Total Reviews: {reviewData.length}</Text>
//         </Box>
//       </Box>
//     </Flex>
//   );
// };

// // Helper function to calculate average rating
// const getAverageRating = (data: { rating: number }[]): number => {
//   const totalRating = data.reduce((acc, curr) => acc + curr.rating, 0);
//   return totalRating / data.length;
// };

// export default StatisticsPage;
