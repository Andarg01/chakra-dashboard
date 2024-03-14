
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

const StatisticsPage: React.FC = () => {
  // Helper function to calculate average rating
  const getAverageRating = (data: { rating: number }[]): number => {
    const totalRating = data.reduce((acc, curr) => acc + curr.rating, 0);
    return totalRating / data.length;
  };

  return (
    <Flex
      flexWrap="wrap"
      justify="center"
      align="center"
      direction={["column", "row"]}
    >
      {/* Product Statistics */}
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
          Product Statistics
        </Text>
        <BarChart width={400} height={300} data={productData}>
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#00800080" />
        </BarChart>
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
        </Box>
      </Box>
    </Flex>
  );
};

export default StatisticsPage;









