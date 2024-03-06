import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import ProductModal from './ProductModal';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  date: string;
  photo: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
  
  ]);

  const [deleteConfirmation, setDeleteConfirmation] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);
  const [filter, setFilter] = useState({ name: '', category: '', date: '' });
  const [sortConfig, setSortConfig] = useState<{ key: keyof Product; direction: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(filter.name.toLowerCase()) &&
        product.category.toLowerCase().includes(filter.category.toLowerCase()) &&
        product.date.includes(filter.date)
    );
    setSortedProducts(filtered);
    setCurrentPage(1);
  }, [products, filter]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSort = (field: keyof Product) => {
    let direction = 'asc';

    if (sortConfig && sortConfig.key === field && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key: field, direction });
    const sorted = [...products].sort((a, b) => {
      if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
      if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
      return 0;
    });

    setSortedProducts(sorted);
  };

  const getSortIcon = (field: keyof Product) => {
    if (!sortConfig || sortConfig.key !== field) {
      return <FaSort />;
    }

    return sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />;
  };

  const handleFilter = () => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(filter.name.toLowerCase()) &&
        product.category.toLowerCase().includes(filter.category.toLowerCase()) &&
        product.date.includes(filter.date)
    );
    setSortedProducts(filtered);
    setCurrentPage(1);
  };

  const handleDelete = (id: string) => {
    setDeleteConfirmation(id);
  };

  const handleEdit = (editedProduct: Product) => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
  };

  const handleAdd = (newProduct: Product) => {
    const id = (products.length + 1).toString();
    const updatedProducts = [...products, { ...newProduct, id }];
    setProducts(updatedProducts);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = sortedProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <Box className="container mx-auto p-6 block">
      <Text fontSize="3xl" fontWeight="semibold" mb="6">
        Product List Page
      </Text>

      <Button
        onClick={() => {
          setSelectedProduct({
            id: (products.length + 1).toString(),
            name: '',
            category: '',
            price: 0,
            quantity: 0,
            date: '',
            photo: '',
          });
          setModalOpen(true);
        }}
        bgColor="purple"
        color="white"
        rounded="md"
        px="4"
        py="2"
        mb="4"
        _hover={{ m: '2' }}
      >
        Add Product
      </Button>

      <ProductTable
        products={currentItems}
        onDelete={handleDelete}
        onEdit={handleEdit}
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        onSort={handleSort}
        getSortIcon={getSortIcon}
        onFilter={handleFilter}
      />

      <Flex justify="center" align="center" mt="4">
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          bgColor="purple"
          color="white"
          px="3"
          py="1"
          rounded="md"
          mr="2"
          _hover={{ m: '2' }}
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-2 mx-1 rounded-md ${
              currentPage === index + 1 ? 'bg-gray-500 text-white' : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          bgColor="pink.500"
          color="white"
          px="3"
          py="1"
          rounded="md"
          ml="2"
          _hover={{ m: '2' }}
        >
          Next
        </Button>
      </Flex>
      {deleteConfirmation && (
  <Box
    className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center"
  >
    <Box className="bg-white p-6 rounded-md w-96">
      <Text>{`Are you sure you want to delete product with ID: ${deleteConfirmation}?`}</Text>
      <Button
        onClick={() => {
          const updatedProducts = products.filter(
            (product) => product.id !== deleteConfirmation
          );
          setProducts(updatedProducts);
          setDeleteConfirmation(null);
        }}
        className="yes px-4 py-2 rounded-md mr-2 bg-pink-500 hover:bg-red-700"
      >
        Yes
      </Button>
      <Button
        onClick={() => setDeleteConfirmation(null)}
        className="cancel px-4 py-2 rounded-md hover:bg-gray-400 "
      >
        Cancel
      </Button>
    </Box>
  </Box>
)}


      {/* {deleteConfirmation && (
        <Box
          className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center"
        >
          <Box className="bg-white p-6 rounded-md w-96">
            <Text>{`Are you sure you want to delete product with ID: ${deleteConfirmation}?`}</Text>
            <Button
              onClick={() => {
                const updatedProducts = products.filter(
                  (product) => product.id !== deleteConfirmation
                );
                setProducts(updatedProducts);
                setDeleteConfirmation(null);
              }}
              className="yes px-4 py-2 rounded-md mr-2 bg-pink-500 hover:bg-red-700"
            >
              Yes
            </Button>
            <Button
              onClick={() => setDeleteConfirmation(null)}
              className="cancel px-4 py-2 rounded-md hover:bg-gray-400 "
            >
              Cancel
            </Button>
          </Box>
        </Box>
      )} */}

      {modalOpen && (
        <ProductModal
          product={selectedProduct}
          onClose={() => {
            setModalOpen(false);
            setSelectedProduct(null);
          }}
          onSave={(editedProduct) => {
            if (selectedProduct) {
              handleEdit(editedProduct);
            } else {
              handleAdd(editedProduct);
            }
            setModalOpen(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </Box>
  );
};

export default ProductList;
