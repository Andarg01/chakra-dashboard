import React from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaShoppingCart, FaList, FaStar } from 'react-icons/fa';

const ShopsCategoriesReviewsPage = () => {
  const shops = [
    { id: '1', name: 'Shop 1' },
    { id: '2', name: 'Shop 2' },
    { id: '3', name: 'Shop 3' },
    { id: '4', name: 'Shop 4' },
    { id: '5', name: 'Shop 5' },
  ];

  const categories = [
    { id: '1', name: 'Category 1' },
    { id: '2', name: 'Category 2' },
    { id: '3', name: 'Category 3' },
    { id: '4', name: 'Category 4' },
    { id: '5', name: 'Category 5' },
  ];

  const reviews = [
    { id: '1', rating: 4 },
    { id: '2', rating: 5 },
    { id: '3', rating: 3 },
    { id: '4', rating: 2 },
    { id: '5', rating: 5 },
  ];

  return (
    <Flex direction={{ base: 'column', md: 'column' }} justify="space-between" gap={4} p={4}>
      {/* Shops */}
      <Box boxShadow="xl" p={4} borderRadius="md" minWidth="200px" flex={{ base: '1', md: 'auto' }}>
        <Flex align="center">
          <Icon as={FaShoppingCart} boxSize={10} color="rgba(0, 100, 0, 0.5)" />
          <Text fontSize="xl" ml={2}>Shops</Text>
        </Flex>
        <Text textAlign="center">Total: {shops.length}</Text>
        {shops.map((shop) => (
          <Text key={shop.id}>{shop.name}</Text>
        ))}
      </Box>

      {/* Categories */}
      <Box boxShadow="xl" p={4} borderRadius="md" minWidth="200px" flex={{ base: '1', md: 'auto' }}>
        <Flex align="center">
          <Icon as={FaList} boxSize={10} color="rgba(0, 100, 0, 0.5)" />
          <Text fontSize="xl" ml={2}>Categories</Text>
        </Flex>
        <Text textAlign="center">Total: {categories.length}</Text>
        {categories.map((category) => (
          <Text key={category.id}>{category.name}</Text>
        ))}
      </Box>

      {/* Reviews */}
      <Box boxShadow="xl" p={4} borderRadius="md" minWidth="200px" flex={{ base: '1', md: 'auto' }}>
        <Flex align="center">
          <Icon as={FaStar} boxSize={10} color="rgba(0, 100, 0, 0.5)" />
          <Text fontSize="xl" ml={2}>Reviews</Text>
        </Flex>
        <Text textAlign="center">Total: {reviews.length}</Text>
        {reviews.map((review) => (
          <Text pl={9} key={review.id}>Rating: {review.rating}</Text>
        ))}
      </Box>
    </Flex>
  );
};

export default ShopsCategoriesReviewsPage;
