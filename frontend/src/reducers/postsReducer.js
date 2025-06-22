const initialState = {
    items: [],
    filteredItems: [],
    loading: false,
    error: null
  };
  
  export default function postsReducer(state = initialState, action) {
    switch (action.type) {
      case 'posts/fetchPosts':
        return { 
          ...state, 
          items: action.payload, 
          filteredItems: action.payload,
          loading: false,
          error: null
        };
  
      case 'posts/addPost':
        return { 
          ...state, 
          items: [action.payload, ...state.items],
          filteredItems: [action.payload, ...state.filteredItems],
          loading: false,
          error: null
        };
  
      case 'posts/deletePost':
        return {
          ...state,
          items: state.items.filter(post => post.id !== action.payload),
          filteredItems: state.filteredItems.filter(post => post.id !== action.payload),
          loading: false,
          error: null
        };
  
      case 'posts/filterPosts':
        return {
          ...state,
          filteredItems: state.items.filter(post =>
            post.name.toLowerCase().includes(action.payload.toLowerCase()))
        };
  
      case 'posts/loading':
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case 'posts/error':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
  
      case 'posts/resetError':
        return {
          ...state,
          error: null
        };
  
      default:
        return state;
    }
  }