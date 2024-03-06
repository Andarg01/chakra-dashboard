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
} from '@chakra-ui/react';

interface Permission {
  id: number;
  name: string;
  description: string;
}

const PermissionPage: React.FC = () => {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Change this as per your requirement
  const [newPermission, setNewPermission] = useState<Permission>({ id: 0, name: '', description: '' });

  // Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteId, setDeleteId] = useState<number | null>(null);

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
        <Button onClick={handleCreate}>Create</Button>
        <Box>
          <Button disabled={currentPage === 1} onClick={prevPage}>Previous</Button>
          <Button disabled={currentPage === totalPages} onClick={nextPage}>Next</Button>
        </Box>
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
