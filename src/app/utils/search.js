import axios from 'axios';

const searchPlaywright = async (searchTerm) => {
try {
const response = await axios.post('/api/search.api.js', {
searchTerm,
});
return response.data;
} catch (error) {
throw new Error(error.response.data.error);
}
};

export { searchPlaywright };
