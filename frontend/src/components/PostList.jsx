import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../actions/postActions';

const PostList = () => {
  const { filteredItems } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <>
    <h2>Lista de Posts</h2>
    <div className="post-list">
      {filteredItems.map((post) => (
        <div className="post-item" key={post.id}>
          
            <h1>{post.name}</h1>
            <p className="textarea">{post.description}</p>
         
          <button 
            className="delete-button"
            onClick={() => dispatch(deletePost(post.id))}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
    </>
  );
};

export default PostList;