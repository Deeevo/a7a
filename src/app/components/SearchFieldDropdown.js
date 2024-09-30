"use client"
import { Select } from '@chakra-ui/react';

const SearchFieldDropdown = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <Select icon={<></>} placeholder="Select option">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default SearchFieldDropdown;
