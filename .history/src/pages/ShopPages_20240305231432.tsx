import React from 'react';
import { Box, Text, Flex, Badge } from '@chakra-ui/react';

interface ShopDashboardCardProps {
  shopName: string;
  sales: number;
  customers: number;
  orders: number;
}

const ShopDashboardCard: React.FC<ShopDashboardCardProps> = ({ shopName, sales, customers, orders }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" bg="white" boxShadow="md" w="300px">
      <Text fontSize="xl" fontWeight="bold" mb="2">{shopName}</Text>
      <Flex justifyContent="space-between" mb="2">
        <Text>Sales:</Text>
        <Badge colorScheme="green">{sales}</Badge>
      </Flex>
      <Flex justifyContent="space-between" mb="2">
        <Text>Customers:</Text>
        <Badge colorScheme="blue">{customers}</Badge>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Orders:</Text>
        <Badge colorScheme="purple">{orders}</Badge>
      </Flex>
    </Box>
  );
};

export default ShopDashboardCard;
