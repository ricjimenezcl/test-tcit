import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions/postActions';

const PostForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    if (!name.trim() || !description.trim()) {
      setError('Nombre y descripción son requeridos');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await dispatch(addPost({ name, description }));
     
      setName('');
      setDescription('');
    } catch (err) {
      setError('Error al crear el post. Por favor intenta nuevamente.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>Agregar Posts</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <input
        type="text"
        placeholder="Nombre del post"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isSubmitting}
      />
      
      <textarea 
        className="textarea"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={isSubmitting}
      />
      
      <button 
        type="submit" 
        disabled={isSubmitting || !name.trim() || !description.trim()}
      >
        {isSubmitting ? 'Creando...' : 'Crear Post'}
      </button>
    </form>
  );
};

export default PostForm;