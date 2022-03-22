import React from 'react';
import DeletePost from './DeletePost';

const Post = ({ user, onDelete }) => {
  return (
    <div class="row mb-3">
      <div class="col-4">
        <h4>{user.title}</h4>
      </div>
      <div class="col-8">
        <DeletePost onDelete={onDelete} user={user} />
      </div>
      <div class="col-12">
        <p>By {user.user}</p>
        <p>{user.post}</p>
      </div>
    </div>
  );
};

export default Post;
