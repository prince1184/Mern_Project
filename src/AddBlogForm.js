// AddBlogForm.js
import React, { useState } from 'react';

function AddBlogForm({ addBlog }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && content.trim() !== '') {
      addBlog({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="Enter blog title" />
      <textarea value={content} onChange={handleContentChange} placeholder="Enter blog content"></textarea>
      <button type="submit">Add Blog</button>
    </form>
  );
}

export default AddBlogForm;
