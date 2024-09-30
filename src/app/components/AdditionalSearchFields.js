"use client"

/*import { useState } from 'react';
import { FormControl, Input, Button, HStack } from '@chakra-ui/react';
import SearchFieldDropdown from './SearchFieldDropdown';

function AdditionalSearchFields() {
  const [fields, setFields] = useState([{ value: '' }]);
  const [addField, setAddField] = useState(false);

  const updateField = (index, value) => {
    setFields(fields.map((field, i) => i === index ? { value } : field));
  };

  const handleAddField = () => {
    setFields((prevFields) => [...prevFields, { value: '' }]);
    setAddField(true);
  };

  const handleRemoveField = (index) => {
    setFields(fields.filter((field, i) => i !== index || field.value !== ''));
  };

  return (
    <div>
      {fields.map((field, index) => (
        <HStack key={index} spacing={4}>
          <FormControl>
            <Input 
              placeholder="Search Field" 
              value={field.value} 
              onChange={(e) => updateField(index, e.target.value)}
            />
          </FormControl>
          <SearchFieldDropdown />
          {fields.length > 1 && (
            <Button onClick={() => handleRemoveField(index)}>Remove</Button>
          )}
        </HStack>
      ))}
      {addField ? (
        <Button onClick={handleAddField}>Add Another Field</Button>
      ) : (
        <Button onClick={() => setAddField(true)}>Add Field</Button>
      )}
    </div>
  );
}

export default AdditionalSearchFields;
*/
/*
import React, { useState, useEffect } from 'react';
import { 
  HStack, 
  Input, 
  Button, 
  FormControl, 
  Select 
} from '@chakra-ui/react';

function AdditionalSearchFields() {
  const [fields, setFields] = useState([{ value: '', option: '' }]);
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [searchButtons, setSearchButtons] = useState([]);

  const handleAddField = () => {
    setFields([...fields, { value: '', option: '' }]);
  };

  const handleRemoveField = (index) => {
    setFields(fields.filter((field, i) => i !== index));
  };

  const updateField = (index, value) => {
    setFields(fields.map((field, i) => i === index ? { value, option: field.option } : field));
  };

  const handleOptionChange = (index, e) => {
    setFields(fields.map((field, i) => i === index ? { value: field.value, option: e.target.value } : field));
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (index, e) => {
    updateField(index, e.target.value);
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (selectedOption && inputValue) {
      setSearchButtons((prevButtons) => [
        ...prevButtons,
        { label: selectedOption, value: inputValue },
      ]);
    }
  }, [selectedOption, inputValue]);

  return (
    <div>
      {fields.map((field, index) => (
        <HStack key={index} spacing={4}>
          <FormControl>
            <Input 
              placeholder="Search Field" 
              value={field.value} 
              onChange={(e) => handleInputChange(index, e)}
            />
          </FormControl>
          <Select 
            value={field.option} 
            onChange={(e) => handleOptionChange(index, e)}
          >
            <option value="RSN">RSN</option>
            {/* Add more options }
          </Select>
          {fields.length > 1 && (
            <Button onClick={() => handleRemoveField(index)}>Remove</Button>
          )}
          {searchButtons.map((button, buttonIndex) => (
            button.value === field.value && (
              <Button key={buttonIndex}>{button.label}</Button>
            )
          ))}
        </HStack>
      ))}
      <Button onClick={handleAddField}>Add Field</Button>
    </div>
  );
}

export default AdditionalSearchFields;
*/

/*
import React, { useState, useEffect } from 'react';
import { 
  HStack, 
  Input, 
  Button, 
  FormControl, 
  Select 
} from '@chakra-ui/react';

function AdditionalSearchFields({ setSearchButtons }) {
  const [fields, setFields] = useState([{ value: '', option: '' }]);
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleAddField = () => {
    setFields([...fields, { value: '', option: '' }]);
  };

  const handleRemoveField = (index) => {
    setFields(fields.filter((field, i) => i !== index));
  };

  const updateField = (index, value) => {
    setFields(fields.map((field, i) => i === index ? { value, option: field.option } : field));
  };

  const handleOptionChange = (index, e) => {
    setFields(fields.map((field, i) => i === index ? { value: field.value, option: e.target.value } : field));
    setSelectedOption(e.target.value);
    console.log('selectedOption:', selectedOption);
  };

  const handleInputChange = (index, e) => {
    updateField(index, e.target.value);
    setInputValue(e.target.value);
    console.log('inputValue:', inputValue);
  };

  useEffect(() => {
    console.log('useEffect executed');
    if (selectedOption && inputValue) {
    setSearchButtons((prevButtons) => [
    ...prevButtons,
    { label: selectedOption, value: inputValue },
    ]);
    console.log('Updated searchButtons:', searchButtons);
    }
    }, [selectedOption, inputValue, setSearchButtons]);

  return (
    <div>
      {fields.map((field, index) => (
        <HStack key={index} spacing={4}>
          <FormControl>
            <Input 
              placeholder="Search Field" 
              value={field.value} 
              onChange={(e) => handleInputChange(index, e)}
            />
          </FormControl>
          <Select 
            value={field.option} 
            onChange={(e) => handleOptionChange(index, e)}
          >
            <option value="RSN">RSN</option>
            {/* Add more options }
          </Select>
          {fields.length > 1 && (
            <Button onClick={() => handleRemoveField(index)}>Remove</Button>
          )}
        </HStack>
      ))}
      <Button onClick={handleAddField}>Add Field</Button>
    </div>
  );
}

export default AdditionalSearchFields; */

import React, { useState, useEffect } from 'react';
import {
  HStack,
  Input,
  Button,
  FormControl,
  Select,
} from '@chakra-ui/react';

function AdditionalSearchFields({ setSearchButtons }) {
  const [fields, setFields] = useState([
    { value: 'Default Value', option: 'RSN' },
  ]);

  const handleAddField = () => {
    setFields([...fields, { value: '', option: '' }]);
  };

  const handleRemoveField = (index) => {
    setFields(fields.filter((field, i) => i !== index));
  };

  const handleOptionChange = (index, e) => {
    setFields(
      fields.map((field, i) =>
        i === index ? { ...field, option: e.target.value } : field
      )
    );
  };

  const handleInputChange = (index, e) => {
    setFields(
      fields.map((field, i) =>
        i === index ? { ...field, value: e.target.value } : field
      )
    );
  };

  useEffect(() => {
    const combinedFields = fields.filter((field) => field.option && field.value);
    setSearchButtons(
      combinedFields.map((field) => ({
        label: `${field.option}: ${field.value}`,
        value: field.value,
      }))
    );
  }, [fields, setSearchButtons]);
    

  return (
    <div>
      {fields.map((field, index) => (
        <HStack key={index} spacing={4}>
          <FormControl>
            <Input
              placeholder="Search Field"
              value={field.value}
              onChange={(e) => handleInputChange(index, e)}
            />
          </FormControl>
          <Select
            value={field.option}
            onChange={(e) => handleOptionChange(index, e)}
          >
            <option value="RSN">RSN</option>
            {/* Add more options */}
          </Select>
          {fields.length > 1 && (
            <Button onClick={() => handleRemoveField(index)}>Remove</Button>
          )}
        </HStack>
      ))}
      <Button onClick={handleAddField}>Add Field</Button>
    </div>
  );
}

export default AdditionalSearchFields;