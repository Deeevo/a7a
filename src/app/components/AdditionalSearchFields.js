"use client"
import { useState } from 'react';
import { FormControl, Input, Button } from '@chakra-ui/react';
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
        <div key={index}>
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
        </div>
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
