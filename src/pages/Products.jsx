import { Box, SimpleGrid, Image, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Smartwatch", price: "$199", image: "/images/smartwatch.jpg" },
];

const Products = ({ searchTerm }) => {
  const filteredProducts = sampleProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.length === 0 && (
          <Text fontSize="xl" fontWeight="bold" textAlign="center" gridColumn="span 3">
            No products found matching your search.
          </Text>
        )}
        {filteredProducts.map(product => (
          <VStack key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
            <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
            <Text>{product.price}</Text>
            <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">View Details</Button>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;