from django.core.management.base import BaseCommand
from movies.models import Movie, Genre, Actor
from decimal import Decimal

class Command(BaseCommand):
    help = 'Populate database with sample movie data'

    def handle(self, *args, **options):
        # Create genres
        genres_data = [
            'Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 
            'Sci-Fi', 'Thriller', 'Romance', 'Fantasy', 'Mystery'
        ]
        
        genres = {}
        for genre_name in genres_data:
            genre, created = Genre.objects.get_or_create(name=genre_name)
            genres[genre_name] = genre
            if created:
                self.stdout.write(f'Created genre: {genre_name}')

        # Create actors
        actors_data = [
            {'name': 'Leonardo DiCaprio', 'biography': 'American actor and film producer'},
            {'name': 'Christopher Nolan', 'biography': 'British-American film director'},
            {'name': 'Tom Hardy', 'biography': 'English actor and producer'},
            {'name': 'Ellen Page', 'biography': 'Canadian actress'},
            {'name': 'Matthew McConaughey', 'biography': 'American actor and producer'},
            {'name': 'Anne Hathaway', 'biography': 'American actress'},
            {'name': 'Christian Bale', 'biography': 'British actor'},
            {'name': 'Heath Ledger', 'biography': 'Australian actor'},
            {'name': 'Keanu Reeves', 'biography': 'Canadian actor'},
            {'name': 'Laurence Fishburne', 'biography': 'American actor'},
        ]
        
        actors = {}
        for actor_data in actors_data:
            actor, created = Actor.objects.get_or_create(
                name=actor_data['name'],
                defaults={'biography': actor_data['biography']}
            )
            actors[actor_data['name']] = actor
            if created:
                self.stdout.write(f'Created actor: {actor_data["name"]}')

        # Create movies
        movies_data = [
            {
                'title': 'Inception',
                'description': 'A skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, is given a chance at redemption which involves executing his toughest job till date – Inception.',
                'release_year': 2010,
                'poster': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChhtRNF6QL3R1AYyh4lb__M5DjOvHIJ5rlg&s',
                'trailer_url': 'https://www.youtube.com/embed/YoHD9XEInc0',
                'director': 'Christopher Nolan',
                'duration': 148,
                'rating': Decimal('8.8'),
                'genres': ['Action', 'Sci-Fi', 'Thriller'],
                'actors': ['Leonardo DiCaprio', 'Tom Hardy', 'Ellen Page']
            },
            {
                'title': 'Interstellar',
                'description': 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
                'release_year': 2014,
                'poster': 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg',
                'trailer_url': 'https://www.youtube.com/embed/2LqzF5WauAw',
                'director': 'Christopher Nolan',
                'duration': 169,
                'rating': Decimal('8.6'),
                'genres': ['Adventure', 'Drama', 'Sci-Fi'],
                'actors': ['Matthew McConaughey', 'Anne Hathaway']
            },
            {
                'title': 'The Dark Knight',
                'description': 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                'release_year': 2008,
                'poster': 'https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?format=jpg&width=1440',
                'trailer_url': 'https://www.youtube.com/embed/EXeTwQWrcwY',
                'director': 'Christopher Nolan',
                'duration': 152,
                'rating': Decimal('9.0'),
                'genres': ['Action', 'Crime', 'Drama'],
                'actors': ['Christian Bale', 'Heath Ledger']
            },
            {
                'title': 'The Matrix',
                'description': 'A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.',
                'release_year': 1999,
                'poster': 'https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_SY679_.jpg',
                'trailer_url': 'https://www.youtube.com/embed/m8e-FF8MsqU',
                'director': 'Lana Wachowski',
                'duration': 136,
                'rating': Decimal('8.7'),
                'genres': ['Action', 'Sci-Fi'],
                'actors': ['Keanu Reeves', 'Laurence Fishburne']
            },
            {
                'title': 'Dune',
                'description': 'Feature adaptation of Frank Herbert\'s science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.',
                'release_year': 2021,
                'poster': 'https://m.media-amazon.com/images/I/81+z7XnFAbL._AC_SY679_.jpg',
                'trailer_url': 'https://www.youtube.com/embed/n9xhJrPXop4',
                'director': 'Denis Villeneuve',
                'duration': 155,
                'rating': Decimal('8.0'),
                'genres': ['Adventure', 'Drama', 'Sci-Fi'],
                'actors': ['Timothée Chalamet', 'Rebecca Ferguson']
            },
            {
                'title': 'Avatar',
                'description': 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
                'release_year': 2009,
                'poster': 'https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg',
                'trailer_url': 'https://www.youtube.com/embed/5PSNL1qE6VY',
                'director': 'James Cameron',
                'duration': 162,
                'rating': Decimal('7.8'),
                'genres': ['Action', 'Adventure', 'Fantasy'],
                'actors': ['Sam Worthington', 'Zoe Saldana']
            }
        ]

        for movie_data in movies_data:
            movie, created = Movie.objects.get_or_create(
                title=movie_data['title'],
                defaults={
                    'description': movie_data['description'],
                    'release_year': movie_data['release_year'],
                    'poster': movie_data['poster'],
                    'trailer_url': movie_data['trailer_url'],
                    'director': movie_data['director'],
                    'duration': movie_data['duration'],
                    'rating': movie_data['rating']
                }
            )
            
            if created:
                # Add genres
                for genre_name in movie_data['genres']:
                    if genre_name in genres:
                        movie.genres.add(genres[genre_name])
                
                # Add actors
                for actor_name in movie_data['actors']:
                    if actor_name in actors:
                        movie.actors.add(actors[actor_name])
                
                self.stdout.write(f'Created movie: {movie_data["title"]}')
            else:
                self.stdout.write(f'Movie already exists: {movie_data["title"]}')

        self.stdout.write(self.style.SUCCESS('Successfully populated database with sample data')) 