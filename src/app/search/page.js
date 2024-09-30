"use client";
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
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/pin-input';
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
          <Button colorScheme="teal" variant="outline">
            Home
          </Button>
          <Button colorScheme="teal" variant="outline">
            Search
          </Button>
          <Button colorScheme="teal" variant="outline">
            Defects
          </Button>
          <Button colorScheme="teal" variant="outline">
            Overview
          </Button>
        </VStack>
        <div className={styles.mainContent}>
          <Heading as="h3" size="lg" className={styles.navTop}>
            Search Page
          </Heading>
          <section className={styles.searchSection}>
            <AdditionalSearchFields />
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
}