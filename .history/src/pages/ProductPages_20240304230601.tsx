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
  ChakraProvider,
  HStack,
} from '@chakra-ui/react';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { NumberInput, NumberInputField } from 'chakra-ui-number-input';

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

const pageSize = 5;

const ProductTable: React.FC = () => {
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [newProductName, setNewProductName] = useState('');
  const [newProductPicture, setNewProductPicture] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('');
  const [newProductPrice, setNewProductPrice] = useState<number | string>(0);
  const [newProductQuantity, setNewProductQuantity] = useState<number | string>(0);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  const handleCreate = () => {
    const newProduct: Product = {
      id: products.length + 1,
      name: newProductName,
      picture: newProductPicture,
      category: newProductCategory,
      price: Number(newProductPrice),
      quantity: Number(newProductQuantity),
    };

    setProducts([...products, newProduct]);

    setNewProductName('');
    setNewProductPicture('');
    setNewProductCategory('');
    setNewProductPrice(0);
    setNewProductQuantity(0);

    onCreateClose();
  };

  const calculateTotalPrice = (product: Product): number => {
    return product.price * product.quantity;
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
    setCurrentPage(1); // Reset to the first page when performing a new search
  };

  const handleCategorySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCategory(event.target.value);
    setCurrentPage(1); // Reset to the first page when performing a new search
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    product.category.toLowerCase().includes(searchCategory.toLowerCase())
  );

  const paginatedProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <ChakraProvider>
      <Box>
        <Stack direction="row" spacing={4} mb={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IconButton aria-label="Search" icon={<SearchIcon />} />
            </InputLeftElement>
            <Input placeholder="Search by Name" value={searchTerm} onChange={handleSearch} />
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IconButton aria-label="Search" icon={<SearchIcon />} />
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
            {paginatedProducts.map(product => (
              <Tr key={product.id}>
                <Td>{product.name}</Td>
                <Td>{product.picture}</Td>
                <Td>{product.category}</Td>
                <Td>{product.price}</Td>
                <Td>{product.quantity}</Td>
                <Td>{calculateTotalPrice(product)}</Td>
                <Td>
                  <Button colorScheme="teal" size="sm" onClick={() => handleUpdate(product)}>
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

        <HStack spacing={4}>
          <IconButton
            aria-label="Previous Page"
            icon={<ChevronLeftIcon />}
            onClick={() => setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage))}
            disabled={currentPage === 1}
          />
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <IconButton
            aria-label="Next Page"
            icon={<ChevronRightIcon />}
            onClick={() => setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : prevPage))}
            disabled={currentPage === totalPages}
          />
        </HStack>

        <Modal isOpen={isCreateOpen} onClose={onCreateClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Add input fields for creating a new product */}
              <Input
                placeholder="Product Name"
                mb={4}
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
              />
              <Input
                placeholder="Picture URL"
                mb={4}
                value={newProductPicture}
                onChange={(e) => setNewProductPicture(e.target.value)}
              />
              <Input
                placeholder="Category"
                mb={4}
                value={newProductCategory}
                onChange={(e) => setNewProductCategory(e.target.value)}
              />
              <NumberInput defaultValue={0} mb={4}>
                <NumberInputField
                  placeholder="Price"
                  value={newProductPrice}
                  onChange={(value) => setNewProductPrice(value)}
                />
              </NumberInput>
              <NumberInput defaultValue={0} mb={4}>
                <NumberInputField
                  placeholder="Quantity"
                  value={newProductQuantity}
                  onChange={(value) => setNewProductQuantity(value)}
                />
              </NumberInput>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={handleCreate}>
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
            <ModalBody>Are you sure you want to delete this product?</ModalBody>
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
    </ChakraProvider>
  );
};

export default ProductTable;
