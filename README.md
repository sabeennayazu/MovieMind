# MovieMind - Movie Recommendation Application

A full-stack movie recommendation application built with Django REST API backend and React frontend.

## Features

- **Movie Discovery**: Browse and search movies with detailed information
- **Movie Details**: View comprehensive movie information including cast, director, trailer, and user comments
- **User Interactions**: Add movies to favorites and wishlist
- **Personalized Recommendations**: Get movie recommendations based on user preferences
- **Search & Filter**: Search movies by title, director, actor, or filter by genre and year
- **User Comments**: Add and view comments on movies
- **Responsive Design**: Modern UI that works on all devices

## Project Structure

```
MovieMind/
├── backend/                 # Django REST API
│   ├── backend/            # Django project settings
│   ├── movies/             # Movies app with models, views, serializers
│   ├── manage.py           # Django management script
│   ├── requirements.txt    # Python dependencies
│   └── API_DOCUMENTATION.md # Complete API documentation
├── app-frontend/           # React frontend application
│   ├── src/
│   │   ├── Components/     # Reusable React components
│   │   ├── Pages/          # Page components
│   │   ├── services/       # API service functions
│   │   └── ...
│   └── package.json
└── README.md
```

## Quick Start

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Create and activate virtual environment**:
   ```bash
   # Windows
   python -m venv venv
   venv\Scripts\activate

   # macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run database migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Populate database with sample data**:
   ```bash
   python manage.py populate_movies
   ```

6. **Create a superuser (optional)**:
   ```bash
   python manage.py createsuperuser
   ```

7. **Run the development server**:
   ```bash
   python manage.py runserver
   ```

The backend API will be available at: `http://localhost:8000/api/`

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd app-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

The frontend application will be available at: `http://localhost:3000`

## Available APIs

### Core Movie APIs

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/movies/` | GET | Get all movies with basic information |
| `/api/movies/{id}/` | GET | Get detailed movie information |
| `/api/movies/trending/` | GET | Get trending movies |
| `/api/movies/recommended/` | GET | Get personalized recommendations |
| `/api/movies/search/` | GET | Search movies with filters |
| `/api/movies/{id}/toggle_favorite/` | POST | Toggle favorite status |
| `/api/movies/{id}/toggle_wishlist/` | POST | Toggle wishlist status |
| `/api/movies/{id}/add_comment/` | POST | Add comment to movie |

### Genre & Actor APIs

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/genres/` | GET | Get all genres |
| `/api/genres/{id}/movies/` | GET | Get movies by genre |
| `/api/actors/` | GET | Get all actors |
| `/api/actors/{id}/movies/` | GET | Get movies by actor |

### User Management APIs

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/favorites/` | GET | Get user favorites |
| `/api/favorites/` | POST | Add movie to favorites |
| `/api/favorites/{id}/` | DELETE | Remove from favorites |
| `/api/wishlist/` | GET | Get user wishlist |
| `/api/wishlist/` | POST | Add movie to wishlist |
| `/api/wishlist/{id}/` | DELETE | Remove from wishlist |

## Frontend Integration

The frontend includes a comprehensive API service (`src/services/api.js`) that provides easy-to-use functions for all backend operations:

```javascript
import { movieAPI, favoriteAPI, wishlistAPI } from '../services/api';

// Get all movies
const movies = await movieAPI.getAll();

// Get movie details
const movie = await movieAPI.getById(1);

// Toggle favorite
await movieAPI.toggleFavorite(1);

// Search movies
const results = await movieAPI.search('inception', 'Sci-Fi', '2010');
```

## Sample Data

The application comes with sample movie data including:

- **Movies**: Inception, Interstellar, The Dark Knight, The Matrix, Dune, Avatar
- **Genres**: Action, Adventure, Comedy, Drama, Horror, Sci-Fi, Thriller, Romance, Fantasy, Mystery
- **Actors**: Leonardo DiCaprio, Christopher Nolan, Tom Hardy, Ellen Page, and more

Each movie includes:
- Title, description, release year
- Poster image URL
- YouTube trailer URL
- Director and cast information
- Genre classifications
- User ratings and comments

## Key Features

### Movie Details Page
- Complete movie information
- Embedded YouTube trailer
- Cast and crew details
- User comments section
- Favorite and wishlist buttons
- Related movie recommendations

### Homepage
- Trending movies carousel
- Personalized recommendations
- Search functionality
- Genre-based filtering

### User Features
- Add/remove movies from favorites
- Add/remove movies from wishlist
- Add comments to movies
- Personalized recommendations based on preferences

## Technology Stack

### Backend
- **Django 5.2**: Web framework
- **Django REST Framework**: API framework
- **SQLite**: Database (can be changed to PostgreSQL/MySQL for production)
- **Django CORS Headers**: Cross-origin resource sharing

### Frontend
- **React**: UI library
- **CSS3**: Styling
- **Fetch API**: HTTP requests
- **React Icons**: Icon library

## Development

### Adding New Movies

1. **Via Django Admin**:
   - Go to `http://localhost:8000/admin/`
   - Login with superuser credentials
   - Add movies, genres, and actors through the admin interface

2. **Via Management Command**:
   - Edit `backend/movies/management/commands/populate_movies.py`
   - Add new movie data to the `movies_data` list
   - Run: `python manage.py populate_movies`

### Customizing the API

The API is built using Django REST Framework ViewSets, making it easy to extend:

- **Models**: `backend/movies/models.py`
- **Serializers**: `backend/movies/serializers.py`
- **Views**: `backend/movies/views.py`
- **URLs**: `backend/movies/urls.py`

### Frontend Customization

- **Components**: `app-frontend/src/Components/`
- **Pages**: `app-frontend/src/Pages/`
- **API Service**: `app-frontend/src/services/api.js`

## Production Deployment

### Backend
1. Set `DEBUG = False` in `settings.py`
2. Configure a production database (PostgreSQL recommended)
3. Set up static file serving
4. Configure environment variables for sensitive data
5. Use a production WSGI server (Gunicorn)

### Frontend
1. Build the production version: `npm run build`
2. Serve static files from a web server (Nginx)
3. Configure API base URL for production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or issues:
1. Check the API documentation: `backend/API_DOCUMENTATION.md`
2. Review the code comments
3. Open an issue on the repository

---

**Happy coding! 🎬🍿** 