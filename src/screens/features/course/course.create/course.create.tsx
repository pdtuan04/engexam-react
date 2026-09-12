import { useFormik } from 'formik';
import * as yup from 'yup';
import { courseValidationSchema, type CourseFormValues } from '../course.types';
import { CourseService } from '../../../../apis/course/course.service';
import { useState } from 'react';


export default function CreateCourse() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formik = useFormik<CourseFormValues>({
        initialValues: {
            name: '',
            description: '',
            content: '',
            topicId: '',
            imageUrl: '',
        },
        validationSchema: courseValidationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                setIsSubmitting(true)
                await CourseService.create(values);
                alert('Course created successfully!');
                resetForm();
            }catch (error) {
                alert('Có lỗi khi gửi lên server .NET!');
                console.error(error);
            }finally{
                setIsSubmitting(false);
            }
        },
    });
    return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Tạo Khóa Học Mới</h2>
      
      {/* 3. KẾT NỐI HTML FORM VỚI FORMIK */}
      <form onSubmit={formik.handleSubmit}>
        
        {/* === Ô NHẬP 1: TÊN KHÓA HỌC === */}
        <div style={{ marginBottom: '15px' }}>
          <label>Tên khóa học: </label>
          <input 
            type="text" 
            // getFieldProps tự động móc nối value, onChange, onBlur cho trường 'name'
            {...formik.getFieldProps('name')} 
          />
          {/* NẾU người dùng đã chạm vào (touched) VÀ có lỗi (errors) -> In ra màu đỏ */}
          {formik.touched.name && formik.errors.name && (
            <span style={{ color: 'red', marginLeft: '10px' }}>{formik.errors.name}</span>
          )}
        </div>

        {/* === Ô NHẬP 2: CHỦ ĐỀ (TOPIC ID) === */}
        <div style={{ marginBottom: '15px' }}>
          <label>Chủ đề: </label>
          <select {...formik.getFieldProps('topicId')}>
            <option value="">-- Chọn một chủ đề --</option>
            <option value="GUID-1234">Lập trình Backend</option>
            <option value="GUID-5678">Lập trình Frontend</option>
          </select>
          {formik.touched.topicId && formik.errors.topicId && (
            <span style={{ color: 'red', marginLeft: '10px' }}>{formik.errors.topicId}</span>
          )}
        </div>

        {/* === Ô NHẬP 3: MÔ TẢ === */}
        <div style={{ marginBottom: '15px' }}>
          <label>Mô tả ngắn: </label>
          <textarea {...formik.getFieldProps('description')} />
          {formik.touched.description && formik.errors.description && (
            <span style={{ color: 'red', marginLeft: '10px' }}>{formik.errors.description}</span>
          )}
        </div>

        {/* ... Bạn có thể tự thêm ô 'content' và 'imageUrl' tương tự ... */}

        {/* === NÚT SUBMIT === */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Đang gửi...' : 'Tạo Khóa Học'}
        </button>

      </form>
    </div>
  );
}