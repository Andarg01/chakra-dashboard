import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Flex, Box, Heading } from '@chakra-ui/react';

const AnalyticsPage = () => {
    const customerReviewData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Customer Reviews',
                data: [5, 70, 100, 8, 12, 15, 98, 78, 5, 56, 37, 99],
                borderColor: '#37305A',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    const ordersData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Orders',
                data: [20, 25, 18, 30, 22, 28, 40, 50, 30, 70, 80, 34],
                backgroundColor: '#F26A8D',
                borderColor: '#37305A',
                borderWidth: 2,
            },
        ],
    };

    const productsData = {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9', 'Category 10'],
        datasets: [
            {
                label: 'Products',
                data: [50, 75, 60, 45, 80, 90, 50, 70, 30, 90],
                backgroundColor: '#37305A',
                borderColor: '#37305A',
                borderWidth: 2,
            },
        ],
    };

    return (
        <Flex flexDirection="column" alignItems="center" mt="8">
            <Heading as="h1" fontSize="2xl" mb="8">Analytics page</Heading>

            <Flex flexWrap="wrap" justifyContent="center" gap="8" mb="20">
                <Box p="4" rounded="lg" shadow="lg" flex="1" mr="4" bg="#37305F" color="#fff">
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">Total Sales</Heading>
                    <Box fontSize="4xl" fontWeight="bold">$12,345</Box>
                </Box>

                <Box p="4" rounded="lg" shadow="lg" flex="1" mr="4" bg="#F26A8D" color="black">
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">Total Revenue</Heading>
                    <Box fontSize="4xl" fontWeight="bold">$9,876</Box>
                </Box>

                <Box p="4" rounded="lg" shadow="lg" flex="1" mr="4" bg="#37305F" color="#fff">
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">Total Products</Heading>
                    <Box fontSize="4xl" fontWeight="bold">310</Box>
                </Box>

                <Box p="4" rounded="lg" shadow="lg" flex="1" bg="#F26A8D" color="black">
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">Total Orders</Heading>
                    <Box fontSize="4xl" fontWeight="bold">98</Box>
                </Box>
            </Flex>

            {/* <Flex justifyContent="center" mb="8">
                <Flex flexWrap="wrap" gap="8">
                    <Box maxW="350px" p="4" rounded="lg" shadow="lg" bg="white">
                        <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">Customer Reviews</Heading>
                        <Line data={customerReviewData} />
                    </Box>

                    <Box maxW="350px" p="4" rounded="lg" shadow="lg" bg="white">
                        <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">Orders</Heading>
                        <Bar data={ordersData} />
                    </Box>

                    <Box maxW="350px" p="4" rounded="lg" shadow="lg" bg="white">
                        <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">Products</Heading>
                        <Bar data={productsData} />
                    </Box>
                </Flex>
            </Flex> */}
        </Flex>
    );
};

export default AnalyticsPage;
