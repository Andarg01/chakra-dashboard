

// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Table,
//   Tbody,
//   Td,
//   Th,
//   Thead,
//   Tr,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Input,
//   InputLeftElement,
//   IconButton,
//   Stack,
//   FormControl,
//   FormLabel,
// } from '@chakra-ui/react';
// import { SearchIcon } from '@chakra-ui/icons';

// interface Permission {
//   id: number;
//   name: string;
//   description: string;
// }

// const PermissionPage: React.FC = () => {
//   const [permissions, setPermissions] = useState<Permission[]>([
//     { id: 1, name: 'Permission 1', description: 'Description for Permission 1' },
//     { id: 2, name: 'Permission 2', description: 'Description for Permission 2' },
//     // ... (add more permissions as needed)
//   ]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(5);
//   const [newPermission, setNewPermission] = useState<Permission>({ id: 0, name: '', description: '' });
//   const [nameFilter, setNameFilter] = useState('');

//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [deleteId, setDeleteId] = useState<number | null>(null);

//   const handleCreate = () => {
//     setNewPermission({ id: 0, name: '', description: '' });
//     onOpen();
//   };

//   const handleSave = () => {
//     if (newPermission.id === 0) {
//       const updatedPermissions = [...permissions, { ...newPermission, id: permissions.length + 1 }];
//       setPermissions(updatedPermissions);
//     } else {
//       const updatedPermissions = permissions.map(permission =>
//         permission.id === newPermission.id ? newPermission : permission
//       );
//       setPermissions(updatedPermissions);
//     }
//     onClose();
//   };

//   const handleEdit = (id: number) => {
//     const permissionToEdit = permissions.find(permission => permission.id === id);
//     if (permissionToEdit) {
//       setNewPermission(permissionToEdit);
//       onOpen();
//     }
//   };

//   const handleDelete = (id: number) => {
//     setDeleteId(id);
//     onOpen();
//   };

//   const handleConfirmDelete = () => {
//     const updatedPermissions = permissions.filter(permission => permission.id !== deleteId);
//     setPermissions(updatedPermissions);
//     onClose();
//   };

//   const handleSearchByName = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNameFilter(event.target.value);
//     setCurrentPage(1);
//   };

//   const filteredPermissions = permissions.filter(permission =>
//     permission.name.toLowerCase().includes(nameFilter.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredPermissions.length / pageSize);
//   const lastIndex = currentPage * pageSize;
//   const firstIndex = lastIndex - pageSize;
//   const currentPermissions = filteredPermissions.slice(firstIndex, lastIndex);

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <Box boxShadow="xl">
//       <Stack direction="row" spacing={4} mb={4}>
//         <InputLeftElement pointerEvents="none">
//           <IconButton aria-label="Search" icon={<SearchIcon />} />
//         </InputLeftElement>
//         <Input
//           placeholder="Search by Name"
//           value={nameFilter}
//           onChange={handleSearchByName}
//         />
//       </Stack>

//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>ID</Th>
//             <Th>Name</Th>
//             <Th>Description</Th>
//             <Th>Actions</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {currentPermissions.map(permission => (
//             <Tr key={permission.id}>
//               <Td>{permission.id}</Td>
//               <Td>{permission.name}</Td>
//               <Td>{permission.description}</Td>
//               <Td>
//                 <Button colorScheme="teal" onClick={() => handleEdit(permission.id)}>
//                   Edit
//                 </Button>
//                 <Button colorScheme="red" ml={2} onClick={() => handleDelete(permission.id)}>
//                   Delete
//                 </Button>
//               </Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>

//       <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
//         <Button onClick={handleCreate}>Create</Button>
//         <Box>
//           <Button disabled={currentPage === 1} onClick={prevPage}>
//             Previous
//           </Button>
//           <Button disabled={currentPage === totalPages} onClick={nextPage}>
//             Next
//           </Button>
//         </Box>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Confirm Delete</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>Are you sure you want to delete this permission?</ModalBody>
//           <ModalFooter>
//             <Button colorScheme="red" onClick={handleConfirmDelete}>
//               Yes
//             </Button>
//             <Button onClick={onClose}>No</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>{newPermission.id === 0 ? 'Create' : 'Edit'} Permission</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <FormControl>
//               <FormLabel>Name</FormLabel>
//               <Input
//                 value={newPermission.name}
//                 onChange={(e) => setNewPermission({ ...newPermission, name: e.target.value })}
//               />
//             </FormControl>
//             <FormControl mt={4}>
//               <FormLabel>Description</FormLabel>
//               <Input
//                 value={newPermission.description}
//                 onChange={(e) => setNewPermission({ ...newPermission, description: e.target.value })}
//               />
//             </FormControl>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="blue" onClick={handleSave}>
//               Save
//             </Button>
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };

// export default PermissionPage;











import React, { useState } from 'react';
import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  Stack,
  InputLeftAddon,
  IconButton,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
// Importing SearchIcon from Chakra UI
import { SearchIcon } from '@chakra-ui/icons';

interface Permission {
  id: number;
  name: string;
  description: string;
}

const PermissionPage: React.FC = () => {
  const [permissions, setPermissions] = useState<Permission[]>([
    { id: 1, name: 'Permission 1', description: 'Description for Permission 1' },
    { id: 2, name: 'Permission 2', description: 'Description for Permission 2' },
    { id: 3, name: 'Permission 3', description: 'Description for Permission 3' },
    { id: 4, name: 'Permission 4', description: 'Description for Permission 4' },
    { id: 5, name: 'Permission 5', description: 'Description for Permission 5' },
    { id: 6, name: 'Permission 6', description: 'Description for Permission 6' },
    { id: 7, name: 'Permission 7', description: 'Description for Permission 7' },
    { id: 8, name: 'Permission 8', description: 'Description for Permission 8' },
    { id: 9, name: 'Permission 9', description: 'Description for Permission 9' },
    { id: 10, name: 'Permission 10', description: 'Description for Permission 10' },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5); // Change this as per your requirement
  const [newPermission, setNewPermission] = useState<Permission>({ id: 0, name: '', description: '' });
  const [nameFilter, setNameFilter] = useState('');

  // Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteId, setDeleteId] = useState<number | null>(null);



  const handleSearchByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
    setCurrentPage(1);
  };

  // Apply the name filter to the displayed permissions
  const filteredPermissions = permissions.filter(permission =>
    permission.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
  // CRUD functions
  const handleCreate = () => {
    setNewPermission({ id: 0, name: '', description: '' });
    onOpen();
  };

  const handleSave = () => {
    // Logic to save or update permission
    if (newPermission.id === 0) {
      // Create new permission
      const updatedPermissions = [...permissions, { ...newPermission, id: permissions.length + 1 }];
      setPermissions(updatedPermissions);
    } else {
      // Update existing permission
      const updatedPermissions = permissions.map(permission =>
        permission.id === newPermission.id ? newPermission : permission
      );
      setPermissions(updatedPermissions);
    }
    onClose();
  };

  const handleEdit = (id: number) => {
    // Find permission with given ID
    const permissionToEdit = permissions.find(permission => permission.id === id);
    if (permissionToEdit) {
      setNewPermission(permissionToEdit);
      onOpen();
    }
  };

  const handleDelete = (id: number) => {
    // Show confirmation modal
    setDeleteId(id);
    onOpen();
  };

  const handleConfirmDelete = () => {
    // Logic to delete permission with given ID
    const updatedPermissions = permissions.filter(permission => permission.id !== deleteId);
    setPermissions(updatedPermissions);
    onClose();
  };

  // Pagination functions
  const totalPages = Math.ceil(permissions.length / pageSize);
  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const currentPermissions = permissions.slice(firstIndex, lastIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box boxShadow="xl">

    <Button onClick={handleCreate} mb={4}>
        Create
      </Button>
      <Stack direction="row" spacing={4} mb={4} align="center">
        {/* Modified InputGroup for a smaller search field */}
        <InputGroup size="sm">
          <InputLeftAddon children={<SearchIcon />} />
          <Input placeholder="Search by Name" value={nameFilter} onChange={handleSearchByName} />
        </InputGroup>
      </Stack>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentPermissions.map(permission => (
            <Tr key={permission.id}>
              <Td>{permission.id}</Td>
              <Td>{permission.name}</Td>
              <Td>{permission.description}</Td>
              <Td>
                <Button colorScheme="teal" onClick={() => handleEdit(permission.id)}>Edit</Button>
                <Button colorScheme="red" ml={2} onClick={() => handleDelete(permission.id)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
        
        
          <Button disabled={currentPage === 1} onClick={prevPage}>Previous</Button>
          <Button disabled={currentPage === totalPages} onClick={nextPage}>Next</Button>
        
      </Box>
      {/* Delete Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to delete this permission?</ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleConfirmDelete}>Yes</Button>
            <Button onClick={onClose}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Create/Edit Permission Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{newPermission.id === 0 ? 'Create' : 'Edit'} Permission</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value={newPermission.name} onChange={(e) => setNewPermission({ ...newPermission, name: e.target.value })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input value={newPermission.description} onChange={(e) => setNewPermission({ ...newPermission, description: e.target.value })} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSave}>Save</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PermissionPage;
















