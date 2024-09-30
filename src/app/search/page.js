"use client";
/*import {
  Stack,
  HStack,
  VStack,
  Flex,
  Button,
  Box,
  Badge,
  Input,
  Heading,
} from '@chakra-ui/react';
import AdditionalSearchFields from '../Components/AdditionalSearchFields';
import SearchFieldDropdown from '../Components/SearchFieldDropdown';
import Results from '../Components/Results';
import styles from '/Users/devmporth/Desktop/VS code projects/AMANDA replacement/a7a/src/app/components/styles.module.css';

export default function SearchPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}></header>
      <div className={styles.container}>
        <VStack spacing={8} className={styles.navLeft}>
          <Button colorScheme="teal" variant="solid">
            Home
          </Button>
          <Button colorScheme="teal" variant="solid">
            Search
          </Button>
          <Button colorScheme="teal" variant="solid">
            Defects
          </Button>
          <Button colorScheme="teal" variant="solid">
            Overview
          </Button>
        </VStack>
        <div className={styles.mainContent}>
          <Heading as="h3" size="lg" className={styles.navTop}>
            Search Page
          </Heading>
          <section className={styles.searchSection}>
            <Stack direction="row" align="center" spacing={4}>
              <Input w="150px" placeholder="Number" />
              <Input w="600px" placeholder="Name" />
              <Input w="150px" placeholder="Street" />
              <Button colorScheme="gray" size="md">
                Search
              </Button>
              <Button colorScheme="gray" size="md">
                Clear
              </Button>
            </Stack>
            <AdditionalSearchFields />
            <Results />
            <Results />
            <Results />
          </section>
        </div>
        <VStack spacing={8} className={styles.navRight}>
          <Button colorScheme="teal" variant="outline">
            Search
          </Button>
          <Button colorScheme="teal" variant="outline">
            RSN #
          </Button>
          <Button colorScheme="teal" variant="outline">
            Row ID
          </Button>
          <Button colorScheme="teal" variant="outline">
            Type
          </Button>
        </VStack>
      </div>
    </main>
  );
}*/


import {
  Stack,
  HStack,
  VStack,
  Flex,
  Button,
  Box,
  Badge,
  Input,
  Heading,
  Container,
} from '@chakra-ui/react';
import AdditionalSearchFields from '../Components/AdditionalSearchFields';
//import SearchFieldDropdown from '../Components/SearchFieldDropdown';
import Results from '../Components/Results';

export default function SearchPage() {
  return (
    <Container maxW="100%" p={0}>
      <HStack spacing={0} w="100%" h="100vh">
        <VStack
          spacing={8}
          w="200px"
          position="fixed"
          top={0}
          left={0}
          bottom={0}
          bg="white"
          borderRight="1px solid"
          borderColor="gray.200"
        >
          <Button colorScheme="teal" variant="solid" size="lg">
            Home
          </Button>
          <Button colorScheme="teal" variant="solid">
            Search
          </Button>
          <Button colorScheme="teal" variant="solid">
            Defects
          </Button>
          <Button colorScheme="teal" variant="solid">
            Overview
          </Button>
        </VStack>
        <Box
          ml={200}
          mr={200}
          p={4}
          overflowY="auto"
          sx={{
            height: 'calc(100vh - 20px)',
          }}
        >
          <Heading as="h3" size="lg" mb={4}>
            Search Page
          </Heading>
          <Stack direction="row" align="center" spacing={4}>
            <Input w="150px" placeholder="Number" />
            <Input w="600px" placeholder="Name" />
            <Input w="150px" placeholder="Street" />
            <Button colorScheme="gray" size="md">
              Search
            </Button>
            <Button colorScheme="gray" size="md">
              Clear
            </Button>
          </Stack>
          <AdditionalSearchFields />
          <Results />
          <Results />
          <Results />
        </Box>
        <VStack
          spacing={8}
          w="200px"
          position="fixed"
          top={0}
          right={0}
          bottom={0}
          bg="white"
          borderLeft="1px solid"
          borderColor="gray.200"
        >
          <Button colorScheme="teal" variant="outline">
            Search
          </Button>
          <Button colorScheme="teal" variant="outline">
            RSN #
          </Button>
          <Button colorScheme="teal" variant="outline">
            Row ID
          </Button>
          <Button colorScheme="teal" variant="outline">
            Type
          </Button>
        </VStack>
      </HStack>
    </Container>
  );
}
