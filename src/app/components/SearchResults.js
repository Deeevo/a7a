/*

"use client"
import { useState, useEffect } from 'react';
import { searchPlaywright } from '../utils/search';

export default function SearchResults() {
const [searchResults, setSearchResults] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [filter, setFilter] = useState('all');
const [sort, setSort] = useState('alphabetical');
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [resultsPerPage, setResultsPerPage] = useState(10);
const [error, setError] = useState(null);

useEffect(() => {
const fetchSearchResults = async () => {
if (searchTerm) {
setLoading(true);
try {
const results = await searchPlaywright(searchTerm);
setSearchResults(results);
} catch (error) {
setError(error.message);
} finally {
setLoading(false);
}
}
};
fetchSearchResults();
}, [searchTerm]);

const filteredResults = searchResults.filter((result) => {
if (filter === 'all') return true;
if (filter === 'permitNumber' && result.includes('Permit #')) return true;
if (filter === 'propertyName' && result.includes('Property Name:')) return true;
return false;
});

const sortedResults = filteredResults.sort((a, b) => {
if (sort === 'alphabetical') return a.localeCompare(b);
if (sort === 'reverseAlphabetical') return b.localeCompare(a);
return 0;
});

const indexOfLastResult = currentPage * resultsPerPage;
const indexOfFirstResult = indexOfLastResult - resultsPerPage;
const paginatedResults = sortedResults.slice(indexOfFirstResult, indexOfLastResult);

return (
    <div>
    <h2>Search Results</h2>
    {loading ? (
    <p>Loading...</p>
    ) : error ? (
    <p>Error: {error}</p>
    ) : (
<div>
<select value={filter} onChange={(e) => setFilter(e.target.value)}>
<option value="all">All</option>
<option value="permitNumber">Permit Number</option>
<option value="propertyName">Property Name</option>
</select>
<select value={sort} onChange={(e) => setSort(e.target.value)}>
<option value="alphabetical">Alphabetical</option>
<option value="reverseAlphabetical">Reverse Alphabetical</option>
</select>
<ul>
{paginatedResults.map((result, index) => (
<li key={index}>{result}</li>
))}
</ul>
<div>
<button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
<span>
Page {currentPage} of {Math.ceil(sortedResults.length / resultsPerPage)}
</span>
<button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
</div>
</div>
)}
</div>
);
}

*/

"use client"
import { 
    Box, 
    VStack, 
    Flex, 
    Text, 
    Badge, 
    Slider, 
    SliderTrack, 
    SliderFilledTrack, 
    SliderThumb, 
    Button 
  } from '@chakra-ui/react';
  import { useState, useEffect } from 'react';
  
  export function SearchResults() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('alphabetical');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sliderValue, setSliderValue] = useState(0);
  
    useEffect(() => {
      const fetchSearchResults = async () => {
        if (searchTerm) {
          setLoading(true);
          try {
            const results = await searchPlaywright(searchTerm);
            setSearchResults(results);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        }
      };
      fetchSearchResults();
    }, [searchTerm]);
  
    const filteredResults = searchResults.filter((result) => {
      if (filter === 'all') return true;
      if (filter === 'permitNumber' && result.includes('Permit #')) return true;
      if (filter === 'propertyName' && result.includes('Property Name:')) return true;
      return false;
    });
  
    const sortedResults = filteredResults.sort((a, b) => {
      if (sort === 'alphabetical') return a.localeCompare(b);
      if (sort === 'reverseAlphabetical') return b.localeCompare(a);
      return 0;
    });
  
    const handleSliderChange = (value) => {
      setSliderValue(value);
    };
  
    return (
      <Box border='1px solid' borderColor='gray.200' p={4} m={4} ml={20}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <VStack align='left' paddingRight='5' paddingTop='5'>
            {sortedResults.map((result, index) => (
              <Box key={index} mb={4}>
                <Flex minWidth='max-content' alignItems='center' justifyContent='space-between'>
                  <Box as='b'>{result.address}</Box>
                  <Badge colorScheme='green'>{result.status}</Badge>
                </Flex>
                <Flex justifyContent='space-between'>
                  <Text maxWidth='calc(100% - 85px)'>{result.description}</Text>
                  <Box whiteSpace='nowrap'>
                    District: <Badge>{result.district}</Badge>
                  </Box>
                </Flex>
                <Flex minWidth='max-content' alignItems='center' justifyContent='space-between'>
                  <Box as='b'>{result.contractor}</Box>
                  <Box>
                    {result.badges.map((badge, index) => (
                      <Badge key={index} colorScheme={badge.colorScheme}>{badge.text}</Badge>
                    ))}
                  </Box>
                </Flex>
                <Flex minWidth='max-content' alignItems='center' justifyContent='space-between'>
                  <Box>RSN: {result.rsn} Row ID: {result.rowId} Parent ID: {result.parentId}</Box>
                  <Box>Date issued: {result.dateIssued}</Box>
                </Flex>
                {result.linkedPermits && (
                  <Box ml={4}>
                    {result.linkedPermits.map((linkedPermit, index) => (
                      <Box key={index} mb={4}>
                        <Flex minWidth='max-content' alignItems='center' justifyContent='space-between'>
                          <Box as='b'>{linkedPermit.address}</Box>
                          <Badge colorScheme='green'>{linkedPermit.status}</Badge>
                        </Flex>
                        <Flex justifyContent='space-between'>
                          <Text maxWidth='calc(100% - 85px)'>{linkedPermit.description}</Text>
                          <Box whiteSpace='nowrap'>
                            District: <Badge>{linkedPermit.district}</Badge>
                          </Box>
                        </Flex>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
            <Box position='fixed' right={20} top={20}>
              <Slider 
                value={sliderValue} 
                onChange={handleSliderChange} 
                min={0} 
                max={100} 
                step={1} 
                width='200px'
              >
                <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Button 
          size='lg' 
          colorScheme='green' 
          mt={4} 
          onClick={() => console.log('Button clicked')}
        >
          Scroll to Top
        </Button>
      </Box>
    </VStack>
  )}
</Box>

);
}

export default SearchResults;