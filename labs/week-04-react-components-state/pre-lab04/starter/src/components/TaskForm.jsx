import { useState } from 'react';

const initialForm = {
  title: '',
  category: '',
  priority: 'normal',
};

function validateTask(formData) {
  const errors = {};

  if (formData.title.trim().length < 3) {
    errors.title = 'ชื่องานต้องมีอย่างน้อย 3 ตัวอักษร';
  }

  const validCategories = ['reading', 'coding', 'review'];
  if (!validCategories.includes(formData.category)) {
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
    <section className="panel">
      <h2>เพิ่มงานใหม่</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">ชื่องาน: </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            aria-invalid={Boolean(errors.title)}
            aria-describedby={errors.title ? 'title-error' : undefined}
          />
          {errors.title && (
            <p id="title-error" className="field-error">
              {errors.title}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="category">หมวดหมู่: </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            aria-invalid={Boolean(errors.category)}
            aria-describedby={errors.category ? 'category-error' : undefined}
          >
            <option value="">-- เลือก --</option>
            <option value="reading">Reading</option>
            <option value="coding">Coding</option>
            <option value="review">Review</option>
          </select>
          {errors.category && (
            <p id="category-error" className="field-error">
              {errors.category}
            </p>
          )}
        </div>

        <button type="submit">บันทึก</button>
      </form>
      {feedback && <p role="status">{feedback}</p>}
    </section>
  );
}

export default TaskForm;