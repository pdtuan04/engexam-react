import { apiClient } from '../apiClient'; 
import type { CourseFormValues } from '../../screens/features/course/course.types';
import { API_ENDPOINTS } from '../../constants/apiEndpoints';

export const CourseService = {
  create: async (data: CourseFormValues) => {
    const response = await apiClient.post(API_ENDPOINTS.COURSE, data);
    return response.data;
  }
};