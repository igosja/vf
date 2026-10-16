import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:10010',
});
// api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`;

export default apiClient;
