"use client"
import { Box, VStack, Flex, Text, Badge } from '@chakra-ui/react';

// Mock data (replace with SQLite database fetch)
const resultsData = [
  {
    address: '2776 Main St',
    status: 'Issued',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....',
    district: 'A',
    companyName: 'RSL Electrical Contractors Ltd',
    badges: ['P', 'R', 'S', 'F'],
    rsn: '6849932',
    rowId: '377462',
    parentId: '345858',
    dateIssued: 'Aug 19, 2024',
  },
  // Add more data objects...
];

export function Results() {
  return (
    <>
      {resultsData.map((result, index) => (
        <Box key={index} border="1px solid" borderColor="gray.200" p={4} m={4} ml={20}>
          <VStack align="left" paddingRight="5" paddingTop="5">
            <Flex minWidth="max-content" alignItems="center" justifyContent="space-between">
              <Box as="b">{result.address}</Box>
              <Badge colorScheme="green">{result.status}</Badge>
            </Flex>
            <Flex justifyContent="space-between">
              <Text maxWidth="calc(100% - 85px)">
                {result.description}
              </Text>
              <Box whiteSpace="nowrap">
                District: <Badge>{result.district}</Badge>
              </Box>
            </Flex>
            <Flex minWidth="max-content" alignItems="center" justifyContent="space-between">
              <Box as="b">{result.companyName}</Box>
              <Box>
                {result.badges.map((badge, index) => (
                  <Badge key={index} colorScheme={badge === 'F' ? 'red' : 'green'}>
                    {badge}
                  </Badge>
                ))}
              </Box>
            </Flex>
            <Flex minWidth="max-content" alignItems="center" justifyContent="space-between">
              <Box>
                RSN: {result.rsn} Row ID: {result.rowId} Parent ID: {result.parentId}
              </Box>
              <Box>Date issued: {result.dateIssued}</Box>
            </Flex>
          </VStack>
        </Box>
      ))}
    </>
  );
}
export default Results;