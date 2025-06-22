import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const PostFilter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFilter(e.target.value);
    dispatch({ type: 'posts/filterPosts', payload: e.target.value });
  };

  return (
    <>
    <h2>Filtrar Posts</h2>
    <input
      type="text"
      placeholder="Filtrar por nombre"
      value={filter}
      onChange={handleChange}
    />
    </>
  );
};

export default PostFilter;