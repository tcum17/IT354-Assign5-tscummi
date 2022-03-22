import React from 'react';

const DeletePost = ({ user, onDelete }) => {
  return (
    <button
      type="button"
      class="float-end btn btn-secondary"
      onClick={() => onDelete(user.id)}
    >
      Delete Post
    </button>
  );
};

export default DeletePost;
