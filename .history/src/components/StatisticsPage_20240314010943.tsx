// Add this line at the top to make it a module


import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Doughnut } from "react-chartjs-2";

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

const StatisticsPage: React.FC = () => {
  // Helper function to calculate average rating
  const getAverageRating = (data: { rating: number }[]): number => {
    const totalRating = data.reduce((acc, curr) => acc + curr.rating, 0);
    return totalRating / data.length;
  };

  // Format reviewData into the structure expected by Doughnut component
  const formattedReviewData = {
    datasets: [
      {
        data: reviewData.map((entry) => entry.rating),
      },
    ],
  };

  return (
    <Flex justify="center" align="center" direction="row">
      {/* Product Statistics */}
      <Box
        boxShadow="xl"
        borderRadius="lg"
        p={6}
        m={4}
        maxW="400px"
        textAlign="center"
      >
        <Text fontSize="xl" mb={4}>
          Product Statistics
        </Text>
        <BarChart width={400} height={300} data={productData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#00800080" />
        </BarChart>
      </Box>

      {/* Category Statistics */}
      <Box
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
          <XAxis dataKey="shop" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="count" fill="#00800080" />
        </AreaChart>
      </Box>

      {/* Shop Statistics */}
      <Box
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
            fill="#00800080"
            label
            dataKey="value" // Add dataKey here
          >
            {shopData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`#${index}00800080`} />
            ))}
          </Pie>
        </PieChart>
      </Box>

      {/* Review Statistics */}
      <Box
        boxShadow="xl"
        borderRadius="lg"
        p={6}
        m={4}
        maxW="400px"
        textAlign="center"
      >
        <Text fontSize="xl" mb={4}>
          Review Statistics
        </Text>
        <Doughnut data={formattedReviewData} />
        <Box textAlign="left">
          <Text fontSize="lg">
            Average Rating: {getAverageRating(reviewData)}
          </Text>
          <Text fontSize="lg">Total Reviews: {reviewData.length}</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default StatisticsPage;




// // Add this line at the top to make it a module


// import React from "react";
// import { Box, Flex, Text } from "@chakra-ui/react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   AreaChart,
//   Area,
//   PieChart,
//   Pie,
//   Cell,
//   LineChart,
//   Line,
// } from "recharts";


// export {};
// // Sample data for demonstration purposes
// const productData = [
//   { category: "Category A", count: 20 },
//   { category: "Category B", count: 15 },
//   { category: "Category C", count: 10 },
//   { category: "Category D", count: 20 },
//   { category: "Category E", count: 15 },
//   { category: "Category F", count: 10 },
//   { category: "Category G", count: 20 },
//   { category: "Category H", count: 15 },
//   { category: "Category I", count: 10 },
// ];

// const categoryData = [
//   { shop: "Shop A", count: 5 },
//   { shop: "Shop B", count: 8 },
//   { shop: "Shop C", count: 12 },
//   { shop: "Shop D", count: 5 },
//   { shop: "Shop E", count: 8 },
//   { shop: "Shop F", count: 12 },
//   { shop: "Shop G", count: 5 },
//   { shop: "Shop H", count: 8 },
//   { shop: "Shop I", count: 12 },
// ];

// const shopData = [
//   { name: "Shop A", value: 30 },
//   { name: "Shop B", value: 40 },
//   { name: "Shop C", value: 30 },
//   { name: "Shop D", value: 30 },
//   { name: "Shop E", value: 40 },
//   { name: "Shop F", value: 30 },
//   { name: "Shop G", value: 30 },
//   { name: "Shop H", value: 40 },
//   { name: "Shop I", value: 30 },
// ];

// const reviewData = [
//   { date: "2024-01-01", rating: 4 },
//   { date: "2024-02-01", rating: 3.5 },
//   { date: "2024-03-01", rating: 4.2 },
//   { date: "2024-04-01", rating: 4 },
//   { date: "2024-05-01", rating: 3.5 },
//   { date: "2024-06-01", rating: 4.2 },
//   { date: "2024-07-01", rating: 4 },
//   { date: "2024-08-01", rating: 3.5 },
//   { date: "2024-09-01", rating: 4.2 },
// ];

// const StatisticsPage: React.FC = () => {
//   // Helper function to calculate average rating
//   const getAverageRating = (data: { rating: number }[]): number => {
//     const totalRating = data.reduce((acc, curr) => acc + curr.rating, 0);
//     return totalRating / data.length;
//   };

//   return (
//     <Flex justify="center" align="center" direction="row">
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
//           <Bar dataKey="count" fill="#00800080" />
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
//           <Area type="monotone" dataKey="count" fill="#00800080" />
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
//             fill="#00800080"
//             label
//             dataKey="value" // Add dataKey here
//           >
//             {shopData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={`#${index}00800080`} />
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
//           <Line type="monotone" dataKey="rating" stroke="#00800080" />
//         </LineChart>
//         <Box textAlign="left">
//           <Text fontSize="lg">
//             Average Rating: {getAverageRating(reviewData)}
//           </Text>
//           <Text fontSize="lg">Total Reviews: {reviewData.length}</Text>
//         </Box>
//       </Box>
//     </Flex>
//   );
// };

// export default StatisticsPage;



