import { Box, Flex, Link, Spacer, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navbar = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setSearchTerm(value);
  };

  return (
  <Box bg="teal.500" p={4}>
    <Flex maxW="1200px" mx="auto" align="center">
      <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">Electronics Store</Link>
      <InputGroup maxW="300px" mx={4}>
        <Input
          placeholder="Search products..."
          value={searchInput}
          onChange={handleSearchChange}
          bg="white"
        />
        <InputRightElement>
          <FaSearch color="gray.300" />
        </InputRightElement>
      </InputGroup>
      <Spacer />
      <Button as={RouterLink} to="/products" colorScheme="teal" variant="outline" color="white">Products</Button>
    </Flex>
  </Box>
);
};

export default Navbar;