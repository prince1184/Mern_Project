// App.js
import React, { useState } from 'react';
import './App.css';
import AddBlogForm from './AddBlogForm';
import BlogList from './BlogList';

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  const deleteBlog = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      <AddBlogForm addBlog={addBlog} />
      <BlogList blogs={blogs} deleteBlog={deleteBlog} />
    </div>
  );
}

export default App;
