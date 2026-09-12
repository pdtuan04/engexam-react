import { API_ENDPOINTS } from './../../constants/apiEndpoints';
import axios from 'axios';

export const TopicService = {
    getAll : async () => {
        const response = await axios.get(API_ENDPOINTS.TOPIC);
        return response.data;
    }
};