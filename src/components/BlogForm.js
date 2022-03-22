import React from 'react';
import { useState } from 'react';
import SubmitButton from './SubmitButton';

const BlogForm = ({ onAdd }) => {
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!post) {
      alert('Please fill out blog post');
      return;
    }

    onAdd({ user, title, post });

    setUser('');
    setTitle('');
    setPost('');
  };

  return (
    <div class="col-md-6 mb-4">
      <h1>React Blog</h1>
      <form action="" className="add-form" onSubmit={onSubmit}>
        <div class="mb-2">
          <select
            class="form-select"
            aria-label="User Select"
            onChange={(e) => setUser(e.currentTarget.value)}
          >
            <option selected>Select the user</option>
            <option value="Leanne Graham">1 - Leanne Graham</option>
            <option value="Ervin Howell">2 - Ervin Howell</option>
            <option value="Clementine Bauch">3 - Clementine Bauch</option>
          </select>
        </div>
        <div class="mb-2">
          <label for="postTitle" class="form-label">
            Post Title
          </label>
          <input
            type="text"
            class="form-control"
            id="postTitle"
            aria-describedby="Help"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div class="mb-3">
          <label for="contentInput" class="form-label">
            Blog Post
          </label>
          <textarea
            class="form-control"
            id="contentInput"
            rows="3"
            value={post}
            onChange={(e) => setPost(e.currentTarget.value)}
          ></textarea>
        </div>
        <div>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
