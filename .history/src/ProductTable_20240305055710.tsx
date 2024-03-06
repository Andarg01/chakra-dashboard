import React, { useState, useEffect } from 'react';
import ProductModal from './ProductModal';
import { Table, Thead, Tbody, Tr, Th, Td, Image, Input, Button, Box } from '@chakra-ui/react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  date: string;
  photo: string;
}

interface ProductTableProps {
  products: Product[];
  onDelete: (id: string) => void;
  onEdit: (product: Product) => void;
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onSort: (field: keyof Product) => void;
  getSortIcon: (field: keyof Product) => React.ReactNode;
  onFilter: () => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onDelete,
  onEdit,
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
  onSort,
  getSortIcon,
  onFilter,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);
  const [filter, setFilter] = useState({ name: '', category: '', date: '' });

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(filter.name.toLowerCase()) &&
        product.category.toLowerCase().includes(filter.category.toLowerCase()) &&
        product.date.includes(filter.date)
    );
    setSortedProducts(filtered);
  }, [products, filter]);

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleSort = (field: keyof Product) => {
    onSort(field);
  };

  const handleFilter = () => {
    onFilter();
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <Button
        key={index + 1}
        onClick={() => onPreviousPage(index + 1)}
        mx={2}
        px={3}
        py={1}
        rounded="md"
        bgColor={index + 1 === currentPage ? 'gray.400' : 'gray.200'}
        color={index + 1 === currentPage ? 'white' : 'gray.700'}
        _hover={{
          bgColor: 'red.700',
        }}
      >
        {index + 1}
      </Button>
    ));
  };

  return (
    <Box
      overflowX="auto"
      bg="white"
      border="1px"
      borderColor="gray.300"
      p={6}
      rounded="lg"
      shadow="md"
      transition="duration: 500ms ease-in-out"
    >
      <Box mb={4} display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <label htmlFor="name" className="mr-2">
            Filter by Name:
          </label>
          <Input
            type="text"
            value={filter.name}
            onChange={(e) => setFilter({ ...filter, name: e.target.value })}
            border="2px"
            p={2}
            rounded="md"
          />
        </Box>
        <Box display="flex" alignItems="center" ml={4}>
          <label htmlFor="category" className="mr-2">
            Filter by Category:
          </label>
          <Input
            type="text"
            value={filter.category}
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
            border="2px"
            p={2}
            rounded="md"
          />
        </Box>
        <Box display="flex" alignItems="center" ml={4}>
          <label htmlFor="date" className="mr-2">
            Filter by Date:
          </label>
          <Input
            type="text"
            value={filter.date}
            onChange={(e) => setFilter({ ...filter, date: e.target.value })}
            border="2px"
            p={2}
            rounded="md"
          />
        </Box>
        <Button onClick={handleFilter} className="filter px-4 py-2 ml-4 rounded-md hover:m-2 border hover:bg-red-700" colorScheme="red">
          Filter
        </Button>
      </Box>

      <Table variant="simple" className="min-w-full border-b border-gray-300">
        <Thead bg="gray.100">
          <Tr>
            {['id', 'Photo', 'Name', 'Category', 'Price', 'Quantity', 'Date', 'Actions'].map((column) => (
              <Th
                key={column}
                onClick={() => (column !== 'Actions' ? handleSort(column.toLowerCase() as keyof Product) : null)}
                py={2}
                px={4}
                borderRight="1px"
                cursor="pointer"
              >
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                  <Box
                    onClick={() => (column !== 'Actions' ? handleSort(column.toLowerCase() as keyof Product) : null)}
                    mr={3}
                    cursor="pointer"
                  >
                    {column}
                  </Box>
                  {column !== 'Actions' && getSortIcon(column.toLowerCase() as keyof Product)}
                </Box>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {sortedProducts.map((product) => (
            <Tr key={product.id} borderBottom="1px">
              <Td py={2} px={4} borderRight="1px">
                {product.id}
              </Td>
              <Td py={2} px={4} borderRight="1px">
                <Image src={product.photo} alt={`Product ${product.name}`} w={16} h={16} rounded="md" m={1} />
              </Td>
              <Td py={2} px={4} borderRight="1px">
                {product.name}
              </Td>
              <Td py={2} px={4} borderRight="1px">
                {product.category}
              </Td>
              <Td py={2} px={4} borderRight="1px">
                {product.price}
              </Td>
              <Td py={2} px={4} borderRight="1px">
                {product.quantity}
              </Td>
              <Td py={2} px={4} borderRight="1px">
                {product.date}
              </Td>
              <Td py={2} px={4}>
                <Button onClick={() => handleEdit(product)} className="edit hover:underline mr-2 hover:text-gray-700">
                  Edit
                </Button>
                <Button onClick={() => onDelete(product.id)} className="delete hover:underline hover:text-red-700">
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {modalOpen && (
        <ProductModal
          product={selectedProduct}
          onClose={() => {
            setModalOpen(false);
            setSelectedProduct(null);
          }}
          onSave={(editedProduct) => {
            onEdit(editedProduct);
            setModalOpen(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </Box>
  );
};

export default ProductTable;
