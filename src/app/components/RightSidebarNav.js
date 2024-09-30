import React from 'react';
import { Button } from '@chakra-ui/react';

function RightSidebarNav({ searchButtons }) {
    return (
    <div>
    {searchButtons.map((button, index) => (
    <Button key={index}>{button.label}</Button>
    ))}
    </div>
    );
    }
    

export default RightSidebarNav;