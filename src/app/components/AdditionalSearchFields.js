"use client"
import { useState } from 'react';
import { FormControl, Input, Button } from '@chakra-ui/react';

function AdditionalSearchFields() {
  const [fields, setFields] = useState([{ value: '' }]);
  const [addField, setAddField] = useState(false);

  const handleAddField = () => {
    setFields((prevFields) => [...prevFields, { value: '' }]);
    setAddField(true);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <FormControl key={index}>
          <Input placeholder="Search Field" value={field.value} />
        </FormControl>
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