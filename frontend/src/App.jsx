import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './actions/postActions';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Posts App</h2>
      <PostFilter />
      <PostList />
      <PostForm />
      
      
    </div>
  );
}

export default App;