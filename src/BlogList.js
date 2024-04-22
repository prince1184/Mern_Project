// BlogList.js
import React from 'react';

function BlogList({ blogs, deleteBlog }) {
  return (
    <div className="blog-container">
      {blogs.map((blog, index) => (
        <div key={index} className="blog">
          <div className="blog-header">
            <h2 className="blog-title">{blog.title}</h2>
            <button className="delete-button" onClick={() => deleteBlog(index)}>Delete</button>
          </div>
          <p className="blog-content">{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
