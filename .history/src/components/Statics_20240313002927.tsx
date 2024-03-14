import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

// Sample data for demonstration
const categoryData = [
  { id: '1', name: 'Electronics', description: 'Description of Electronics category', shopId: '1', status: true },
  { id: '2', name: 'Clothing', description: 'Description of Clothing category', shopId: '1', status: true },
  // Add more data as needed
];

const Statics: React.FC = () => {
  return (
    <Box p={8}>
      <Table variant="simple" boxShadow="xl">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Shop ID</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {categoryData.map((category) => (
            <Tr key={category.id}>
              <Td>{category.id}</Td>
              <Td>{category.name}</Td>
              <Td>{category.description}</Td>
              <Td>{category.shopId}</Td>
              <Td>{category.status ? 'Active' : 'Inactive'}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Statics;





// import React from 'react';
// import { Flex, Box, Text, Icon } from '@chakra-ui/react';
// import { AiOutlineShop, AiOutlineShopping, AiOutlineAppstore, AiOutlineOrderedList, AiOutlineStar } from 'react-icons/ai';

// const DashboardCard: React.FC<{ title: string; value: number; icon: React.ElementType }> = ({ title, value, icon: IconComponent }) => (
//   <Box
//     bg="white"
//     p={6}
//     borderRadius="lg"
//     boxShadow="xl"
//     width="300px"
//     height="150px"
//     margin="4"
//   >
//     <Flex align="center" mb={2}>
//       <Icon as={IconComponent} color="green" boxSize={6} mr={2} />
//       <Text fontSize="lg" fontWeight="bold">{title}</Text>
//     </Flex>
//     <Text fontSize="3xl" mb={4}>{value}</Text>
//   </Box>
// );

// const Statics: React.FC = () => {
//   // Static data for demonstration
//   const totalShops = 10;
//   const totalProducts = 100;
//   const totalCategories = 20;
//   const totalOrders = 500;
//   const totalReviews = 200;

//   return (
//     <Flex justify="center" align="center" minHeight="100vh">
//       <Flex direction="column" align="center">
//         <Flex wrap="wrap" justify="center">
//           <DashboardCard title="Total Shops" value={totalShops} icon={AiOutlineShop} />
//           <DashboardCard title="Total Products" value={totalProducts} icon={AiOutlineShopping} />
//           <DashboardCard title="Total Categories" value={totalCategories} icon={AiOutlineAppstore} />
//         </Flex>
//         <Flex wrap="wrap" justify="center">
//           <DashboardCard title="Total Orders" value={totalOrders} icon={AiOutlineOrderedList} />
//           <DashboardCard title="Total Reviews" value={totalReviews} icon={AiOutlineStar} />
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };

// export default Statics;
