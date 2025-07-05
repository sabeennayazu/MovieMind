const API_BASE_URL = 'http://localhost:8000/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Token ${token}` })
  };
};

// Generic API call function
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        ...getAuthHeaders(),
        ...options.headers
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Movie APIs
export const movieAPI = {
  // Get all movies
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/movies/${queryString ? `?${queryString}` : ''}`);
  },

  // Get movie details
  getById: (id) => apiCall(`/movies/${id}/`),

  // Get trending movies
  getTrending: () => apiCall('/movies/trending/'),

  // Get recommended movies
  getRecommended: () => apiCall('/movies/recommended/'),

  // Search movies
  search: (query, genre = '', year = '') => {
    const params = new URLSearchParams();
    if (query) params.append('q', query);
    if (genre) params.append('genre', genre);
    if (year) params.append('year', year);
    return apiCall(`/movies/search/?${params.toString()}`);
  },

  // Toggle favorite
  toggleFavorite: (id) => apiCall(`/movies/${id}/toggle_favorite/`, {
    method: 'POST'
  }),

  // Toggle wishlist
  toggleWishlist: (id) => apiCall(`/movies/${id}/toggle_wishlist/`, {
    method: 'POST'
  }),

  // Add comment
  addComment: (id, text) => apiCall(`/movies/${id}/add_comment/`, {
    method: 'POST',
    body: JSON.stringify({ text })
  })
};

// Genre APIs
export const genreAPI = {
  // Get all genres
  getAll: () => apiCall('/genres/'),

  // Get movies by genre
  getMovies: (id) => apiCall(`/genres/${id}/movies/`)
};

// Actor APIs
export const actorAPI = {
  // Get all actors
  getAll: () => apiCall('/actors/'),

  // Get movies by actor
  getMovies: (id) => apiCall(`/actors/${id}/movies/`)
};

// User Favorites APIs
export const favoriteAPI = {
  // Get user favorites
  getAll: () => apiCall('/favorites/'),

  // Add to favorites
  add: (movieId) => apiCall('/favorites/', {
    method: 'POST',
    body: JSON.stringify({ movie: movieId })
  }),

  // Remove from favorites
  remove: (id) => apiCall(`/favorites/${id}/`, {
    method: 'DELETE'
  })
};

// User Wishlist APIs
export const wishlistAPI = {
  // Get user wishlist
  getAll: () => apiCall('/wishlist/'),

  // Add to wishlist
  add: (movieId) => apiCall('/wishlist/', {
    method: 'POST',
    body: JSON.stringify({ movie: movieId })
  }),

  // Remove from wishlist
  remove: (id) => apiCall(`/wishlist/${id}/`, {
    method: 'DELETE'
  })
};

// Authentication helper
export const auth = {
  // Set auth token
  setToken: (token) => {
    localStorage.setItem('authToken', token);
  },

  // Get auth token
  getToken: () => {
    return localStorage.getItem('authToken');
  },

  // Remove auth token
  removeToken: () => {
    localStorage.removeItem('authToken');
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  }
};

export default {
  movieAPI,
  genreAPI,
  actorAPI,
  favoriteAPI,
  wishlistAPI,
  auth
}; 