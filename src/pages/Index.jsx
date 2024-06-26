import { Box, Button, Container, Flex, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Vape Shop</Heading>
        <HStack spacing={4}>
          <Button variant="link" colorScheme="whiteAlpha">Home</Button>
          <Button variant="link" colorScheme="whiteAlpha">Products</Button>
          <Button variant="link" colorScheme="whiteAlpha">About</Button>
          <Button variant="link" colorScheme="whiteAlpha">Contact</Button>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">Cart</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        as="section"
        height="70vh"
        bgImage="url('/path-to-hero-image.jpg')"
        bgSize="cover"
        bgPosition="center"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading size="2xl">Welcome to Vape Shop</Heading>
          <Text fontSize="lg">Your one-stop shop for the best vaping products</Text>
          <Button colorScheme="teal" size="lg">Shop Now</Button>
        </VStack>
      </Flex>

      {/* Product Showcase */}
      <Box as="section" py={10}>
        <Heading textAlign="center" mb={6}>Featured Products</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={4}>
          {/* Product 1 */}
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="/images/product1.jpg" alt="Sleek Vape Pen" />
            <Box p={6}>
              <Heading size="md" mb={2}>Sleek Vape Pen</Heading>
              <Text mb={4}>$19.99</Text>
              <Text mb={4}>A modern and compact vape pen for everyday use.</Text>
              <Button colorScheme="teal" size="sm">Add to Cart</Button>
            </Box>
          </Box>

          {/* Product 2 */}
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="/images/product2.jpg" alt="Stylish Vape Mod" />
            <Box p={6}>
              <Heading size="md" mb={2}>Stylish Vape Mod</Heading>
              <Text mb={4}>$49.99</Text>
              <Text mb={4}>A high-performance vape mod with a digital display.</Text>
              <Button colorScheme="teal" size="sm">Add to Cart</Button>
            </Box>
          </Box>

          {/* Product 3 */}
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="/images/product3.jpg" alt="Vape Juice Variety Pack" />
            <Box p={6}>
              <Heading size="md" mb={2}>Vape Juice Variety Pack</Heading>
              <Text mb={4}>$29.99</Text>
              <Text mb={4}>A pack of assorted vape juices with unique flavors.</Text>
              <Button colorScheme="teal" size="sm">Add to Cart</Button>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10}>
        <Container maxW="container.md" textAlign="center">
          <Text mb={2}>Contact Us: info@vapeshop.com | +1 234 567 890</Text>
          <Text>&copy; {new Date().getFullYear()} Vape Shop. All rights reserved.</Text>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;