
import React, { useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button, Flex, Input, FormControl } from '@chakra-ui/react';

interface Order {
  id: string;
  totalAmount: number;
  status: string;
  userId: string;
}

interface TopOrdersTableProps {
  orders: Order[];
  currentPage: number;
  itemsPerPage: number;
  searchUserId: string;
  setSearchUserId: (userId: string) => void; 
}

const TopOrdersTable: React.FC<TopOrdersTableProps> = ({ orders, currentPage, itemsPerPage, searchUserId }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredOrders = searchUserId.trim() !== '' ?
    orders.filter(order => order.userId.toLowerCase().includes(searchUserId.toLowerCase())) :
    orders;

  const currentOrders = filteredOrders.slice(startIndex, endIndex);

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
          {currentOrders.map((order) => (
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

const Statics: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchUserId, setSearchUserId] = useState('');
  const itemsPerPage = 4; 

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h1>Top Orders</h1>
      <FormControl justifyContent="end" width="200px">
        <Input
          type="text"
          placeholder="Search by User ID"
          value={searchUserId}
          onChange={(e) => setSearchUserId(e.target.value)}
        />
      </FormControl>
      <TopOrdersTable
        orders={sampleOrders} 
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        searchUserId={searchUserId}
        setSearchUserId={setSearchUserId} 
      />
      <Flex justifyContent="center" mt={4}>
        <Button onClick={handlePreviousPage} disabled={currentPage === 1} bg="#00" color="white" mr={2}>Previous</Button>
        <Button onClick={handleNextPage} bg="#008000" color="white">Next</Button>
      </Flex>
    </div>
  );
};

export default Statics;

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
  {
    id: '6',
    totalAmount: 90,
    status: 'Delivered',
    userId: 'user6',
  },
  {
    id: '7',
    totalAmount: 220,
    status: 'Shipped',
    userId: 'user7',
  },
];

// import React from 'react';
// import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

// interface Order {
//   id: string;
//   totalAmount: number;
//   status: string;
//   userId: string;
// }

// interface TopOrdersTableProps {
//   orders: Order[];
// }

// const TopOrdersTable: React.FC<TopOrdersTableProps> = ({ orders }) => {
//   return (
//     <Box boxShadow="xl" borderRadius="lg" overflow="hidden">
//       <Table variant="striped" colorScheme="gray">
//         <Thead>
//           <Tr>
//             <Th>ID</Th>
//             <Th>Total Amount</Th>
//             <Th>Status</Th>
//             <Th>User ID</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {orders.map((order) => (
//             <Tr key={order.id}>
//               <Td>{order.id}</Td>
//               <Td>${order.totalAmount}</Td>
//               <Td>{order.status}</Td>
//               <Td>{order.userId}</Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </Box>
//   );
// };

// const sampleOrders: Order[] = [
//   {
//     id: '1',
//     totalAmount: 100,
//     status: 'Shipped',
//     userId: 'user1',
//   },
//   {
//     id: '2',
//     totalAmount: 150,
//     status: 'Pending',
//     userId: 'user2',
//   },
//   {
//     id: '3',
//     totalAmount: 200,
//     status: 'Delivered',
//     userId: 'user3',
//   },
//   {
//     id: '4',
//     totalAmount: 120,
//     status: 'Pending',
//     userId: 'user4',
//   },
//   {
//     id: '5',
//     totalAmount: 180,
//     status: 'Shipped',
//     userId: 'user5',
//   },
// ];

// const Statics: React.FC = () => {
//   return (
//     <div>
//       <h1>Top Orders</h1>
//       <TopOrdersTable orders={sampleOrders} />
//     </div>
//   );
// };

// export default Statics;


