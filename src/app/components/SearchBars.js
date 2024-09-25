import React, { useState } from 'react';
import { Box, Flex, Input, Button } from '@chakra-ui/react';
import styles from './SearchBars.module.css';

const DigitInput = ({ value, onChange, index }) => (
  <Input
    type="number"
    placeholder={`Digit ${index + 1}`}
    value={value}
    onChange={(e) => onChange(index, e)}
    maxLength={1}
    minWidth="30px"
  />
);

const SearchBars = () => {
  const [seriesField1Value, setSeriesField1Value] = useState('0');
  const [seriesField2Value, setSeriesField2Value] = useState('0');
  const [digitValues, setDigitValues] = useState(['0', '0', '0', '0', '0', '0']);

  const handleSeriesField1Change = (event) => {
    const newValue = event.target.value;
    if (isNaN(newValue) || newValue.length > 2) {
      return;
    }
    setSeriesField1Value(newValue);
  };

  const handleSeriesField2Change = (event) => {
    const newValue = event.target.value;
    if (isNaN(newValue) || newValue.length > 6) {
      return;
    }
    setSeriesField2Value(newValue);
  };

  const handleDigitChange = (index, event) => {
    const newValue = event.target.value;
    const parsedValue = parseInt(newValue);
    if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 9) {
      return;
    }
    setDigitValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = newValue;
      return newValues;
    });
  };

  const handleSearch = () => {
    // Call Playwright script to retrieve data
    console.log('Search button clicked!');
  };

  const handleClear = () => {
    setSeriesField1Value('0');
    setSeriesField2Value('0');
    setDigitValues(['0', '0', '0', '0', '0', '0']);
  };

  return (
    <Box className={styles.searchBars}>
      <Flex justifyContent="space-between">
        {/* Quick Permit Number Search */}
        <Flex alignItems="center">
          <Input
            type="number"
            placeholder="Series Field 1"
            value={seriesField1Value}
            onChange={handleSeriesField1Change}
            maxLength={2}
            minWidth="60px"
          />
          <Input
            type="number"
            placeholder="Series Field 2"
            value={seriesField2Value}
            onChange={handleSeriesField2Change}
            maxLength={6}
            minWidth="90px"
          />
          {digitValues.map((value, index) => (
            <DigitInput
              key={index}
              value={value}
              onChange={handleDigitChange}
              index={index}
            />
          ))}
          <Button colorScheme="blue" onClick={handleSearch}>
            Search
          </Button>
          <Button colorScheme="red" onClick={handleClear}>
            Clear
          </Button>
        </Flex>
        {/* Property Search */}
        {/* Add Property Search component here */}
      </Flex>
    </Box>
  );
};

export default SearchBars;