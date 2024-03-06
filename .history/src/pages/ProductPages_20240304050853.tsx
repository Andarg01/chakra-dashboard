// ProductTable.tsx
import React, { useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface Product {
  id: number;
  name: string;
  picture: string;
  category: string;
  price: number;
  quantity: number;
}

const initialProducts: Product[] = [
  { id: 1, name: 'Product 1', picture: 'img1.jpg', category: 'Category A', price: 10, quantity: 5 },
  { id: 2, name: 'Product 2', picture: 'img2.jpg', category: 'Category B', price: 20, quantity: 3 },
  // Add more initial products as needed
];

const ProductTable: React.FC = () => {
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleCreate = (newProduct: Product) => {
    setProducts([...products, newProduct]);
    onCreateClose();
  };

  const handleUpdate = (updatedProduct: Product) => {
    setProducts(products.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
    onCreateClose();
  };

  const handleDelete = () => {
    if (selectedProduct) {
      setProducts(products.filter(product => product.id !== selectedProduct.id));
      onDeleteClose();
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCategory(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    product.category.toLowerCase().includes(searchCategory.toLowerCase())
  );

  return (
    <Box>
      <Stack direction="row" spacing={4} mb={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IconButton icon={<SearchIcon />} />
          </InputLeftElement>
          <Input placeholder="Search by Name" value={searchTerm} onChange={handleSearch} />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IconButton icon={<SearchIcon />} />
          </InputLeftElement>
          <Input placeholder="Search by Category" value={searchCategory} onChange={handleCategorySearch} />
        </InputGroup>
      </Stack>

      <Table variant="striped" colorScheme="teal" boxShadow="xl">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Picture</Th>
            <Th>Category</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Total Price</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredProducts.map(product => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>{product.picture}</Td>
              <Td>{product.category}</Td>
              <Td>{product.price}</Td>
              <Td>{product.quantity}</Td>
              <Td>{/* Calculate total price based on your logic */}</Td>
              <Td>
                <Button colorScheme="teal" size="sm" onClick={() => { /* Implement edit functionality */ }}>
                  Edit
                </Button>
                <Button colorScheme="red" size="sm" ml={2} onClick={() => { setSelectedProduct(product); onDeleteOpen(); }}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isCreateOpen} onClose={onCreateClose}>
        {/* Modal Content for Create Product (same as before) */}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add input fields for creating a new product */}
            <Input placeholder="Product Name" mb={4} />
            <Input placeholder="Picture URL" mb={4} />
            <Input placeholder="Category" mb={4} />
            <NumberInput defaultValue={0} mb={4}>
              <NumberInputField placeholder="Price" />
            </NumberInput>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={() => { /* Implement create functionality */ }}>
              Create
            </Button>
            <Button onClick={onCreateClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
        
      </Modal>

      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete this product?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleDelete}>
              Yes
            </Button>
            <Button onClick={onDeleteClose}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Button colorScheme="teal" mt={4} onClick={onCreateOpen}>
        Create Product
      </Button>
    </Box>
  );
};

export default ProductTable;
