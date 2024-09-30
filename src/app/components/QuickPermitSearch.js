/*// Import necessary components from Chakra UI and React
import { Input, Flex } from '@chakra-ui/react';
import { useState } from 'react';

// Define the QuickPermitSearch component
const QuickPermitSearch = ({ handleSearch }) => {
  // Initialize state for permit number with 8 empty digits
  const [permitNumber, setPermitNumber] = useState(['', '', '', '', '', '', '', '']);

  // Handle input change for each digit
  const handleInputChange = (index, value) => {
    // Update permitNumber state with new value at specified index
    const newPermitNumber = [...permitNumber];
    newPermitNumber[index] = value;
    setPermitNumber(newPermitNumber);
  };

  // Handle key down events (arrow keys, Enter)
  const handleKeyDown = (index, event) => {
    // Handle ArrowUp key press
    switch (event.key) {
      case 'ArrowUp':
        // Increment current digit value (wraps around to 0 at 9)
        const currentValue = parseInt(permitNumber[index]) || 0;
handleInputChange(index, (currentValue + 1 > 9) ? "0" : (currentValue + 1).toString());
break;
      case 'ArrowDown':
        // Decrement current digit value (wraps around to 9 at 0)
        const currentValueDown = parseInt(permitNumber[index]) || 0;
handleInputChange(index, (currentValueDown - 1 < 0) ? "9" : (currentValueDown - 1).toString());
break;
      case 'ArrowLeft':
        // Focus previous input field
        if (index > 0) {
          const prevInput = document.getElementById(`input-${index - 1}`);
          prevInput.focus();
          prevInput.select();
          event.preventDefault();
        }
        break;
      case 'ArrowRight':
        // Focus next input field
        if (index < 7) {
          const nextInput = document.getElementById(`input-${index + 1}`);
          nextInput.focus();
          nextInput.select();
          event.preventDefault();
        }
        break;
      case 'Enter':
        // Call handleSearch function with complete permit number
        handleSearch(permitNumber.join(''));
        break;
      default:
        console.log({
            event,
            index,
            permitNumber,
            currentValue: parseInt(permitNumber[index]),
          });
        break;
    }
  };

  return (
    // Render input fields for each digit
    <Flex>
      {permitNumber.map((digit, index) => (
        <Input
          key={index}
          // Unique id for each input field
          id={`input-${index}`}
          // tabIndex for correct tabbing order
          tabIndex={index + 1}
          type="number"
          maxLength={1}
          value={digit}
          // Update state on input change
          onChange={(e) => handleInputChange(index, e.target.value)}
          // Handle key down events
          onKeyDown={(e) => handleKeyDown(index, e)}
          width="30px"
          textAlign="center"
        />
      ))}
    </Flex>
  );
};

export default QuickPermitSearch;