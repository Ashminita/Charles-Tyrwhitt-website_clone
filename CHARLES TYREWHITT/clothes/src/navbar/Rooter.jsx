import React from 'react';
import { Box, Flex, Link, Text, Input, Button, VStack, HStack, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.100" py={10}>
      <VStack spacing={8}>
        <Flex justify="space-around" w="full">
          <VStack align="start" spacing={2}>
            <Text fontWeight="bold">HELP</Text>
            <Link>FAQs</Link>
            <Link>Shipping</Link>
            <Link>Returns</Link>
            <Link>Size Guides</Link>
            <Link>Shirt Multibuy</Link>
            <Link>Find a Store</Link>
            <Link>Contact Us</Link>
            <Link>Where is My Order?</Link>
          </VStack>
          <VStack align="start" spacing={2}>
            <Text fontWeight="bold">LEGAL</Text>
            <Link>Terms and Conditions</Link>
            <Link>Privacy Policy</Link>
            <Link>Our Cookie Policy</Link>
            <Link>Accessibility Policy</Link>
            <Link>Ethical Trading Policy</Link>
            <Link>Modern Slavery Statement</Link>
            <Link>Inclusive Working Statement</Link>
          </VStack>
          <VStack align="start" spacing={2}>
            <Text fontWeight="bold">MORE INFO</Text>
            <Link>About Us</Link>
            <Link>Custom Shirts</Link>
            <Link>Gift Vouchers</Link>
            <Link>Affiliate Programme</Link>
            <Link>Wholesale Partnerships</Link>
            <Link>Request a Catalogue</Link>
            <Link>Doing Things Properly</Link>
          </VStack>
          <VStack align="start" spacing={2}>
            <Text fontWeight="bold">CAREERS</Text>
            <Link>UK Vacancies</Link>
            <Link>US Vacancies</Link>
            <Link>Our Beliefs</Link>
            <Link>Our Benefits</Link>
            <Link>Our People</Link>
          </VStack>
        </Flex>
        <Box textAlign="center">
          <Text mb={2}>We will keep you posted on new products and great offers</Text>
          <HStack spacing={2}>
            <Input placeholder="Email address" />
            <Button colorScheme="blue">Subscribe</Button>
          </HStack>
        </Box>
        <Divider />
        <Flex justify="space-between" w="full" fontSize="sm">
          <Text>© 2024 Charles Tyrwhitt Shirts Ltd.</Text>
          <HStack spacing={4}>
            <Text>Shopping is secure with Charles Tyrwhitt.</Text>
            <HStack>
              <Text>We accept:</Text>
              
              
            </HStack>
          </HStack>
        </Flex>
        <Flex justify="center" w="full">
          <Text>All products are imported into the US.</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Footer;
