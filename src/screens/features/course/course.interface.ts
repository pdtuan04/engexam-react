export interface Course {
  id: string;
  name: string;
  description: string;
  content: string;
  imageUrl?: string | null;
  topicId: string;
  createdAt?: string;
  updatedAt?: string;
  isDeleted?: boolean;
}
export interface CreateCourseRequest {
  name: string;
  description: string;
  content: string;
  topicId: string;
  imageUrl?: string | null;
}
export interface UpdateCourseRequest extends CreateCourseRequest {
    id: string;
}
export interface DeleteCourseRequest {
    id: string;
}