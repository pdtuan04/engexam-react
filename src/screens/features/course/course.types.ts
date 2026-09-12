import * as yup from 'yup';
export const courseValidationSchema = yup.object({
    name: yup.string().required('Name is required'),
    description: yup.string().required('Description is required'),
    content: yup.string().required('Content is required'),
    topicId: yup.string().required('Topic ID is required'),
    imageUrl: yup.string().url('Image URL must be a valid URL').nullable(),
});
export type CourseFormValues = yup.InferType<typeof courseValidationSchema>;