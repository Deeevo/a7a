/*'use client';

import { Button, Stack, Select } from '@chakra-ui/react';
import { useState } from 'react';
import QuickPermitSearch from '/Users/devmporth/Desktop/VS code projects/AMANDA replacement/a7a/src/app/components/QuickPermitSearch.js';

export default function SearchInput() {
  const [searchType, setSearchType] = useState('quick');

  const handleSearch = async (searchTerm) => {
    const searchResults = await searchPlaywright(searchTerm);
    console.log(searchResults);
  };

  const searchPlaywright = async (searchTerm) => {
    const response = await fetch('/api/search.api.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchTerm }),
    });
    const results = await response.json();
    return results;
  };

  return (
    <Stack spacing={4}>
      {/* Search type selector *}
      <Select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option value="quick">Quick Search</option>
        <option value="property">Property Search</option>
        <option value="custom">Custom Search</option>
      </Select>

      {/* Quick Permit Number search *}
      {searchType === 'quick' && <QuickPermitSearch handleSearch={handleSearch} />}

      {/* Simplified Property Search *}
      {searchType === 'property' && (
        <Stack direction="row" spacing={4}>
          <Input placeholder="Property Number" />
          <Input placeholder="Property Name" />
          <Input placeholder="Street Type" />
        </Stack>
      )}

      {/* Custom Search *}
      {searchType === 'custom' && (
        <Stack>
          <Input placeholder="Custom Search Term" />
          <Select placeholder="Search Field">
            <option value="permitNumber">Permit Number</option>
            <option value="propertyName">Property Name</option>
            <option value="address">Address</option>
          </Select>
        </Stack>
      )}

      {/* Search button (only show for property and custom searches) *}
      {(searchType === 'property' || searchType === 'custom') && (
        <Button colorScheme="blue" onClick={() => handleSearch('')}>
          Search
        </Button>
      )}
    </Stack>
  );
}
*/