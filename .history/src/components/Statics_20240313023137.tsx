

import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

interface Order {
  id: string;
  totalAmount: number;
  status: string;
  userId: string;
}

interface TopOrdersTableProps {
  orders: Order[];
}

const TopOrdersTable: React.FC<TopOrdersTableProps> = ({ orders }) => {
  return (
    <Box boxShadow="xl" borderRadius="lg" overflow="hidden">
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Total Amount</Th>
            <Th>Status</Th>
            <Th>User ID</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>${order.totalAmount}</Td>
              <Td>{order.status}</Td>
              <Td>{order.userId}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

const sampleOrders: Order[] = [
  {
    id: '1',
    totalAmount: 100,
    status: 'Shipped',
    userId: 'user1',
  },
  {
    id: '2',
    totalAmount: 150,
    status: 'Pending',
    userId: 'user2',
  },
  {
    id: '3',
    totalAmount: 200,
    status: 'Delivered',
    userId: 'user3',
  },
  {
    id: '4',
    totalAmount: 120,
    status: 'Pending',
    userId: 'user4',
  },
  {
    id: '5',
    totalAmount: 180,
    status: 'Shipped',
    userId: 'user5',
  },
];

const Statics: React.FC = () => {
  return (
    <div>
      <h1>Top Orders</h1>
      <TopOrdersTable orders={sampleOrders} />
    </div>
  );
};

export default Statics;


// import React from 'react';
// import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

// // Sample data for demonstration
// const categoryData = [
//   { id: '1', name: 'Electronics', description: 'Description of Electronics category', shopId: '1', status: true },
//   { id: '2', name: 'Clothing', description: 'Description of Clothing category', shopId: '1', status: true },
//   // Add more data as needed
// ];

// const Statics: React.FC = () => {
//   return (
//     <Box p={8}>
//       <Table variant="simple" boxShadow="xl">
//         <Thead>
//           <Tr>
//             <Th>ID</Th>
//             <Th>Name</Th>
//             <Th>Description</Th>
//             <Th>Shop ID</Th>
//             <Th>Status</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {categoryData.map((category) => (
//             <Tr key={category.id}>
//               <Td>{category.id}</Td>
//               <Td>{category.name}</Td>
//               <Td>{category.description}</Td>
//               <Td>{category.shopId}</Td>
//               <Td>{category.status ? 'Active' : 'Inactive'}</Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </Box>
//   );
// };

// export default Statics;





// // import React from 'react';
// // import { Flex, Box, Text, Icon } from '@chakra-ui/react';
// // import { AiOutlineShop, AiOutlineShopping, AiOutlineAppstore, AiOutlineOrderedList, AiOutlineStar } from 'react-icons/ai';

// // const DashboardCard: React.FC<{ title: string; value: number; icon: React.ElementType }> = ({ title, value, icon: IconComponent }) => (
// //   <Box
// //     bg="white"
// //     p={6}
// //     borderRadius="lg"
// //     boxShadow="xl"
// //     width="300px"
// //     height="150px"
// //     margin="4"
// //   >
// //     <Flex align="center" mb={2}>
// //       <Icon as={IconComponent} color="green" boxSize={6} mr={2} />
// //       <Text fontSize="lg" fontWeight="bold">{title}</Text>
// //     </Flex>
// //     <Text fontSize="3xl" mb={4}>{value}</Text>
// //   </Box>
// // );

// // const Statics: React.FC = () => {
// //   // Static data for demonstration
// //   const totalShops = 10;
// //   const totalProducts = 100;
// //   const totalCategories = 20;
// //   const totalOrders = 500;
// //   const totalReviews = 200;

// //   return (
// //     <Flex justify="center" align="center" minHeight="100vh">
// //       <Flex direction="column" align="center">
// //         <Flex wrap="wrap" justify="center">
// //           <DashboardCard title="Total Shops" value={totalShops} icon={AiOutlineShop} />
// //           <DashboardCard title="Total Products" value={totalProducts} icon={AiOutlineShopping} />
// //           <DashboardCard title="Total Categories" value={totalCategories} icon={AiOutlineAppstore} />
// //         </Flex>
// //         <Flex wrap="wrap" justify="center">
// //           <DashboardCard title="Total Orders" value={totalOrders} icon={AiOutlineOrderedList} />
// //           <DashboardCard title="Total Reviews" value={totalReviews} icon={AiOutlineStar} />
// //         </Flex>
// //       </Flex>
// //     </Flex>
// //   );
// // };

// // export default Statics;
