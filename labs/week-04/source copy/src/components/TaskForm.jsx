import { useState } from 'react';

const initialForm = {
  title: '',
  category: '',
  priority: 'ปกติ',
};

const validCategories = ['อ่าน/ทบทวน', 'เขียนโค้ด', 'ตรวจและอธิบาย', 'reading', 'coding', 'review'];

function validateTask(formData) {
  const errors = {};

  if (formData.title.trim().length < 3) {
    errors.title = 'ชื่องานต้องมีอย่างน้อย 3 ตัวอักษร';
  }

  if (!formData.category || !validCategories.includes(formData.category)) {
    errors.category = 'กรุณาเลือกหมวดหมู่';
  }

  return errors;
}

function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateTask(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setFeedback('');
      return;
    }

    onAddTask(formData);
    setFormData(initialForm);
    setErrors({});
    setFeedback('เพิ่มรายการสำเร็จ');
  }

  return (
    <form className="panel form-panel" onSubmit={handleSubmit}>
      <div className="form-header">
        <span className="eyebrow" style={{ color: '#1768c4', fontSize: '0.75rem', fontWeight: 'bold' }}>
          CONTROLLED FORM
        </span>
        <h2 style={{ marginTop: '0.25rem' }}>เพิ่มงานฝึก</h2>
      </div>

      <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        <label htmlFor="title" style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>ชื่องาน</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? 'title-error' : undefined}
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #c9d8eb', outline: 'none' }}
        />
        {errors.title && (
          <p id="title-error" className="error-text" style={{ color: '#dc2626', fontSize: '0.85rem', margin: '0' }}>
            {errors.title}
          </p>
        )}
      </div>

      <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        <label htmlFor="category" style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>ประเภท</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          aria-invalid={Boolean(errors.category)}
          aria-describedby={errors.category ? 'category-error' : undefined}
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #c9d8eb', outline: 'none' }}
        >
          <option value="" disabled>-- เลือกประเภท --</option>
          <option value="อ่าน/ทบทวน">อ่าน/ทบทวน</option>
          <option value="เขียนโค้ด">เขียนโค้ด</option>
          <option value="ตรวจและอธิบาย">ตรวจและอธิบาย</option>
        </select>
        {errors.category && (
          <p id="category-error" className="error-text" style={{ color: '#dc2626', fontSize: '0.85rem', margin: '0' }}>
            {errors.category}
          </p>
        )}
      </div>

      <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        <label htmlFor="priority" style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>ความสำคัญ</label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #c9d8eb', outline: 'none' }}
        >
          <option value="ปกติ">ปกติ</option>
          <option value="สำคัญ">สำคัญ</option>
        </select>
      </div>

      <button type="submit" style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', backgroundColor: '#1768c4', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>
        เพิ่มงาน
      </button>

      {feedback && (
        <p role="status" className="feedback-status feedback-success" style={{ marginTop: '1rem', padding: '0.75rem', borderRadius: '8px', backgroundColor: '#f0fdf4', color: '#16a34a', textAlign: 'center', fontWeight: '600', margin: '1rem 0 0 0' }}>
          {feedback}
        </p>
      )}
    </form>
  );
}

export default TaskForm;