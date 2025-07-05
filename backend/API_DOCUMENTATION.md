# MovieMind API Documentation

This document provides comprehensive information about all available APIs for the MovieMind application.

## Base URL
```
http://localhost:8000/api/
```

## Authentication
Most endpoints require authentication. Include the authentication token in the request headers:
```
Authorization: Token your_auth_token_here
```

## API Endpoints

### 1. Movies

#### Get All Movies
- **URL**: `GET /api/movies/`
- **Description**: Retrieve a list of all movies with basic information
- **Query Parameters**:
  - `search`: Search movies by title, description, director, or actor names
  - `ordering`: Sort by `title`, `release_year`, `rating`, `created_at`
  - `page`: Page number for pagination
- **Response**: List of movies with basic info (id, title, release_year, poster, rating, genres)

**Example Request**:
```javascript
fetch('http://localhost:8000/api/movies/')
  .then(response => response.json())
  .then(data => console.log(data));
```

**Example Response**:
```json
{
  "count": 6,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "title": "Inception",
      "release_year": 2010,
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChhtRNF6QL3R1AYyh4lb__M5DjOvHIJ5rlg&s",
      "rating": "8.8",
      "genres": [
        {"id": 1, "name": "Action"},
        {"id": 6, "name": "Sci-Fi"},
        {"id": 7, "name": "Thriller"}
      ]
    }
  ]
}
```

#### Get Movie Details
- **URL**: `GET /api/movies/{id}/`
- **Description**: Get detailed information about a specific movie
- **Response**: Complete movie details including actors, comments, and user interaction status

**Example Request**:
```javascript
fetch('http://localhost:8000/api/movies/1/')
  .then(response => response.json())
  .then(data => console.log(data));
```

**Example Response**:
```json
{
  "id": 1,
  "title": "Inception",
  "description": "A skilled thief, the absolute best in the dangerous art of extraction...",
  "release_year": 2010,
  "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChhtRNF6QL3R1AYyh4lb__M5DjOvHIJ5rlg&s",
  "trailer_url": "https://www.youtube.com/embed/YoHD9XEInc0",
  "director": "Christopher Nolan",
  "duration": 148,
  "rating": "8.8",
  "genres": [
    {"id": 1, "name": "Action"},
    {"id": 6, "name": "Sci-Fi"},
    {"id": 7, "name": "Thriller"}
  ],
  "actors": [
    {
      "id": 1,
      "name": "Leonardo DiCaprio",
      "biography": "American actor and film producer",
      "birth_date": null,
      "photo": null
    }
  ],
  "comments": [
    {
      "id": 1,
      "user": {"id": 1, "username": "user123"},
      "text": "Amazing movie! Must watch.",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "is_favorite": false,
  "is_in_wishlist": true,
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

#### Get Trending Movies
- **URL**: `GET /api/movies/trending/`
- **Description**: Get trending movies (high-rated recent movies)
- **Response**: List of trending movies

**Example Request**:
```javascript
fetch('http://localhost:8000/api/movies/trending/')
  .then(response => response.json())
  .then(data => console.log(data));
```

#### Get Recommended Movies
- **URL**: `GET /api/movies/recommended/`
- **Description**: Get personalized movie recommendations based on user preferences
- **Authentication**: Required
- **Response**: List of recommended movies

**Example Request**:
```javascript
fetch('http://localhost:8000/api/movies/recommended/', {
  headers: {
    'Authorization': 'Token your_auth_token_here'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Search Movies
- **URL**: `GET /api/movies/search/`
- **Query Parameters**:
  - `q`: Search query (title, description, director, actor)
  - `genre`: Filter by genre
  - `year`: Filter by release year
- **Response**: Filtered list of movies

**Example Request**:
```javascript
fetch('http://localhost:8000/api/movies/search/?q=inception&genre=Sci-Fi')
  .then(response => response.json())
  .then(data => console.log(data));
```

#### Toggle Favorite
- **URL**: `POST /api/movies/{id}/toggle_favorite/`
- **Description**: Add/remove movie from user's favorites
- **Authentication**: Required
- **Response**: Success message

**Example Request**:
```javascript
fetch('http://localhost:8000/api/movies/1/toggle_favorite/', {
  method: 'POST',
  headers: {
    'Authorization': 'Token your_auth_token_here',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Toggle Wishlist
- **URL**: `POST /api/movies/{id}/toggle_wishlist/`
- **Description**: Add/remove movie from user's wishlist
- **Authentication**: Required
- **Response**: Success message

**Example Request**:
```javascript
fetch('http://localhost:8000/api/movies/1/toggle_wishlist/', {
  method: 'POST',
  headers: {
    'Authorization': 'Token your_auth_token_here',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Add Comment
- **URL**: `POST /api/movies/{id}/add_comment/`
- **Description**: Add a comment to a movie
- **Authentication**: Required
- **Request Body**:
```json
{
  "text": "Great movie! Highly recommended."
}
```
- **Response**: Comment object

**Example Request**:
```javascript
fetch('http://localhost:8000/api/movies/1/add_comment/', {
  method: 'POST',
  headers: {
    'Authorization': 'Token your_auth_token_here',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: "Great movie! Highly recommended."
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

### 2. Genres

#### Get All Genres
- **URL**: `GET /api/genres/`
- **Description**: Get all available genres
- **Response**: List of genres

**Example Response**:
```json
[
  {"id": 1, "name": "Action"},
  {"id": 2, "name": "Adventure"},
  {"id": 3, "name": "Comedy"},
  {"id": 4, "name": "Drama"},
  {"id": 5, "name": "Horror"},
  {"id": 6, "name": "Sci-Fi"},
  {"id": 7, "name": "Thriller"},
  {"id": 8, "name": "Romance"},
  {"id": 9, "name": "Fantasy"},
  {"id": 10, "name": "Mystery"}
]
```

#### Get Movies by Genre
- **URL**: `GET /api/genres/{id}/movies/`
- **Description**: Get all movies in a specific genre
- **Response**: List of movies in that genre

### 3. Actors

#### Get All Actors
- **URL**: `GET /api/actors/`
- **Description**: Get all actors
- **Response**: List of actors with basic information

**Example Response**:
```json
[
  {
    "id": 1,
    "name": "Leonardo DiCaprio",
    "biography": "American actor and film producer",
    "birth_date": null,
    "photo": null
  }
]
```

#### Get Movies by Actor
- **URL**: `GET /api/actors/{id}/movies/`
- **Description**: Get all movies featuring a specific actor
- **Response**: List of movies featuring that actor

### 4. User Favorites

#### Get User Favorites
- **URL**: `GET /api/favorites/`
- **Description**: Get all movies in user's favorites
- **Authentication**: Required
- **Response**: List of favorite movies

**Example Request**:
```javascript
fetch('http://localhost:8000/api/favorites/', {
  headers: {
    'Authorization': 'Token your_auth_token_here'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Add to Favorites
- **URL**: `POST /api/favorites/`
- **Description**: Add a movie to user's favorites
- **Authentication**: Required
- **Request Body**:
```json
{
  "movie": 1
}
```

#### Remove from Favorites
- **URL**: `DELETE /api/favorites/{id}/`
- **Description**: Remove a movie from user's favorites
- **Authentication**: Required

### 5. User Wishlist

#### Get User Wishlist
- **URL**: `GET /api/wishlist/`
- **Description**: Get all movies in user's wishlist
- **Authentication**: Required
- **Response**: List of wishlist movies

#### Add to Wishlist
- **URL**: `POST /api/wishlist/`
- **Description**: Add a movie to user's wishlist
- **Authentication**: Required
- **Request Body**:
```json
{
  "movie": 1
}
```

#### Remove from Wishlist
- **URL**: `DELETE /api/wishlist/{id}/`
- **Description**: Remove a movie from user's wishlist
- **Authentication**: Required

## Frontend Integration Examples

### React Component Example

```javascript
import React, { useState, useEffect } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/movies/');
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (movieId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/movies/${movieId}/toggle_favorite/`, {
        method: 'POST',
        headers: {
          'Authorization': 'Token your_auth_token_here',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data.message);
      // Refresh movie data to update favorite status
      fetchMovies();
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <img src={movie.poster} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.release_year}</p>
          <button onClick={() => toggleFavorite(movie.id)}>
            {movie.is_favorite ? '❤️' : '🤍'} Favorite
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
```

### Movie Detail Component Example

```javascript
import React, { useState, useEffect } from 'react';

const MovieDetail = ({ movieId }) => {
  const [movie, setMovie] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetchMovieDetail();
  }, [movieId]);

  const fetchMovieDetail = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/movies/${movieId}/`);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const addComment = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/movies/${movieId}/add_comment/`, {
        method: 'POST',
        headers: {
          'Authorization': 'Token your_auth_token_here',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: comment })
      });
      const data = await response.json();
      setComment('');
      fetchMovieDetail(); // Refresh to show new comment
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Director: {movie.director}</p>
      <p>Release Year: {movie.release_year}</p>
      <p>Rating: {movie.rating}/10</p>
      
      {movie.trailer_url && (
        <iframe
          src={movie.trailer_url}
          title="Movie Trailer"
          width="560"
          height="315"
          frameBorder="0"
          allowFullScreen
        />
      )}

      <h3>Cast:</h3>
      <ul>
        {movie.actors.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>

      <h3>Genres:</h3>
      <ul>
        {movie.genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>

      <h3>Comments:</h3>
      {movie.comments.map(comment => (
        <div key={comment.id}>
          <strong>{comment.user.username}:</strong> {comment.text}
        </div>
      ))}

      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={addComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default MovieDetail;
```

## Error Handling

All API endpoints return appropriate HTTP status codes:

- `200 OK`: Request successful
- `201 Created`: Resource created successfully
- `400 Bad Request`: Invalid request data
- `401 Unauthorized`: Authentication required
- `403 Forbidden`: Permission denied
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

Error responses include a message explaining the error:

```json
{
  "error": "Authentication required"
}
```

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Run Migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

3. **Populate Sample Data**:
   ```bash
   python manage.py populate_movies
   ```

4. **Run the Server**:
   ```bash
   python manage.py runserver
   ```

5. **Access the API**:
   - API Root: http://localhost:8000/api/
   - Admin Interface: http://localhost:8000/admin/

## Notes

- All timestamps are in ISO 8601 format (UTC)
- Image URLs are external links to movie posters
- Trailer URLs are YouTube embed URLs
- The API supports pagination for large datasets
- CORS is enabled for frontend integration
- Authentication is handled via Django REST framework tokens 