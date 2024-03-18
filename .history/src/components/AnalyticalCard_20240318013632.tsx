
import React from 'react';
import { Box, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { LineChart, Line, Tooltip } from 'recharts';
import { AiOutlineShop, AiOutlineShopping, AiOutlineStar, AiOutlineAppstore } from 'react-icons/ai';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'; // Importing the arrow icons

interface AnalyticsCardProps {
  title: string;
  value: number;
  data: { name: string; value: number }[];
  icon: React.ReactElement;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, value, data, icon }) => {
  const cardBgColor = useColorModeValue('white', 'gray.800');

  // Calculate the percentage change
  const percentageChange = data.length > 1 ? ((data[data.length - 1].value - data[0].value) / data[0].value) * 100 : 0;
  const isIncreasing = percentageChange >= 0;

  return (
    <Box
      bgColor={cardBgColor}
      p={6}
      borderRadius="lg"
      boxShadow="xl"
      width={{ base: "100%", sm: "45%", md: "30%", lg: "22%" }} // Responsive width
      height={{ base: "auto", sm: "200px", md: "220px", lg: "240px" }} // Responsive height
      display="flex"
      flexDirection="column"
      margin="4"
      position="relative" // Add position relative for absolute positioning of percentage
    >
      <Flex align="center" mb={4}>
        {React.cloneElement(icon, { color: 'green' })} {/* Set icon color to green */}
        <Text fontSize="xl" fontWeight="bold" ml={2}>
          {title}
        </Text>
      </Flex>
      <Text fontSize="xl" fontWeight="normal" mb={4} pl={8}>
        {value}k
      </Text>
      <Flex flex="1" direction="column" justify="flex-end">
        <LineChart width={250} height={100} data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00ff00" // Set stroke to green
            isAnimationActive={true} // Disable animation to hide the rectangle background
          />
          <Tooltip isAnimationActive={true} /> {/* Hide tooltips */}
        </LineChart>
      </Flex>
      <Box
        position="absolute"
        top="100px"
        right="8px"
        fontSize="sm"
        fontWeight="bold"
        
        color={isIncreasing ? 'green' : 'red'}
      >
        {isIncreasing ? <FiArrowUp /> : <FiArrowDown />}
        {`${Math.abs(Number(percentageChange.toFixed(2)))}%`}
      </Box>
    </Box>
  );
};

const FullAnalyticsPage: React.FC = () => {
  // Data for each card
  const shopData = [
    { name: 'Jan', value: 5 },
    { name: 'Feb', value: 8 },
    { name: 'Mar', value: 12 },
    { name: 'apr', value: 8 },
    { name: 'jun', value: 12 },
    { name: 'jula', value: 13 },
    // Add more data points as needed
  ];

  const productData = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 15 },
    { name: 'Mar', value: 25 },
    { name: 'apr', value: 20 },
    { name: 'jun', value: 15 },
    { name: 'jula', value: 25 },
    // Add more data points as needed
  ];

  const reviewData = [
    { name: 'Jan', value: 4 },
    { name: 'Feb', value: 7 },
    { name: 'Mar', value: 6 },
    { name: 'apr', value: 8 },
    { name: 'jun', value: 10 },
    { name: 'jula', value: 12 },
  ];

  const categoryData = [
    { name: 'Category A', value: 15 },
    { name: 'Category B', value: 20 },
    { name: 'Category C', value: 10 },
    // Add more data points as needed
  ];

  return (
    <Flex justify="center" align="center" height="100%">
      <Flex direction="row" align="center" flexWrap="wrap">
        <AnalyticsCard title="Total Shop" value={10} data={shopData} icon={<AiOutlineShop size={24} />} />
        <AnalyticsCard title="Total Product" value={50} data={productData} icon={<AiOutlineShopping size={24} />} />
        <AnalyticsCard title="Review" value={20} data={reviewData} icon={<AiOutlineStar size={24} />} />
        <AnalyticsCard title="Category" value={45} data={categoryData} icon={<AiOutlineAppstore size={24} />} />
      </Flex>
    </Flex>
  );
};

export default FullAnalyticsPage;


// import React from 'react';
// import { Box, Text, Flex, useColorModeValue } from '@chakra-ui/react';
// import { LineChart, Line, Tooltip } from 'recharts';
// import { AiOutlineShop, AiOutlineShopping, AiOutlineFileText, AiOutlineStar, AiOutlineAppstore } from 'react-icons/ai';

// interface AnalyticsCardProps {
//   title: string;
//   value: number;
//   data: { name: string; value: number }[];
//   icon: React.ReactElement;
// }

// const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, value, data, icon }) => {
//   const cardBgColor = useColorModeValue('white', 'gray.800');

//   // Calculate the percentage change
//   const percentageChange = data.length > 1 ? ((data[data.length - 1].value - data[0].value) / data[0].value) * 100 : 0;
//   const isIncreasing = percentageChange >= 0;

//   return (
//     <Box
//       bgColor={cardBgColor}
//       p={6}


//       borderRadius="lg"
//       boxShadow="xl"
//       width={{ base: "100%", sm: "45%", md: "30%", lg: "22%" }} // Responsive width
//       height={{ base: "auto", sm: "200px", md: "220px", lg: "240px" }} // Responsive height
//       display="flex"
//       flexDirection="column"
//       margin="4"
//       position="relative" // Add position relative for absolute positioning of percentage
//     >
//       <Flex align="center" mb={4}>
//         {React.cloneElement(icon, { color: 'green' })} {/* Set icon color to green */}
//         <Text fontSize="xl" fontWeight="bold" ml={2}>
//           {title}
//         </Text>
//       </Flex>
//       <Text fontSize="xl" fontWeight="normal" mb={4} pl={8}>
//         {value}k
//       </Text>
//       <Flex flex="1" direction="column" justify="flex-end">
//         <LineChart width={250} height={100} data={data}>
//           <Line
//             type="monotone"
//             dataKey="value"
//             stroke="#00ff00" // Set stroke to green
//             isAnimationActive={true} // Disable animation to hide the rectangle background
//           />
//           <Tooltip isAnimationActive={true} /> {/* Hide tooltips */}
//         </LineChart>
//       </Flex>
//       <Box
//         position="absolute"
//         top="100px"
//         right="8px"
//         fontSize="sm"
//         fontWeight="bold"
//         color={isIncreasing ? 'green' : 'red'}
//       >
//         {`${isIncreasing ? '+' : '-'}${Math.abs(Number(percentageChange.toFixed(2)))}%`}
//       </Box>
//     </Box>
//   );
// };

// const FullAnalyticsPage: React.FC = () => {
//   // Data for each card
//   const shopData = [
//     { name: 'Jan', value: 5 },
//     { name: 'Feb', value: 8 },
//     { name: 'Mar', value: 12 },
//     { name: 'apr', value: 8 },
//     { name: 'jun', value: 12 },
//     { name: 'jula', value: 13 },
//     // Add more data points as needed
//   ];

//   const productData = [
//     { name: 'Jan', value: 20 },
//     { name: 'Feb', value: 15 },
//     { name: 'Mar', value: 25 },
//     { name: 'apr', value: 20 },
//     { name: 'jun', value: 15 },
//     { name: 'jula', value: 25 },
//     // Add more data points as needed
//   ];

//   const orderData = [
//     { name: 'Jan', value: 10 },
//     { name: 'Feb', value: 18 },
//     { name: 'Mar', value: 15 },
//     { name: 'apr', value: 30 },
//     { name: 'jun', value: 15 },
//     { name: 'jula', value: 20 },
    
//   ];

//   const reviewData = [
//     { name: 'Jan', value: 4 },
//     { name: 'Feb', value: 7 },
//     { name: 'Mar', value: 6 },
//     { name: 'apr', value: 8 },
//     { name: 'jun', value: 10 },
//     { name: 'jula', value: 12 },
    
//   ];

//   const categoryData = [
//     { name: 'Category A', value: 15 },
//     { name: 'Category B', value: 20 },
//     { name: 'Category C', value: 10 },
//     // Add more data points as needed
//   ];

//   return (
//     <Flex justify="center" align="center" height="100%">
//       <Flex direction="row" align="center" flexWrap="wrap">
//         <AnalyticsCard title="Total Shop" value={10} data={shopData} icon={<AiOutlineShop size={24} />} />
//         <AnalyticsCard title="Total Product" value={50} data={productData} icon={<AiOutlineShopping size={24} />} />
//         {/* <AnalyticsCard title="Total Order" value={303} data={orderData} icon={<AiOutlineFileText size={24} />} /> */}
//         <AnalyticsCard title="Review" value={20} data={reviewData} icon={<AiOutlineStar size={24} />} />
//         <AnalyticsCard title="Category" value={45} data={categoryData} icon={<AiOutlineAppstore size={24} />} />
//       </Flex>
//     </Flex>
//   );
// };

// export default FullAnalyticsPage;

