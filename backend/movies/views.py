from django.shortcuts import render
from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import Movie, Genre, Actor, UserFavorite, UserWishlist, Comment
from .serializers import (
    MovieSerializer, MovieListSerializer, GenreSerializer, ActorSerializer,
    UserFavoriteSerializer, UserWishlistSerializer, CommentSerializer
)

# Create your views here.

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description', 'director', 'actors__name', 'genres__name']
    ordering_fields = ['title', 'release_year', 'rating', 'created_at']
    ordering = ['-created_at']

    def get_serializer_class(self):
        if self.action == 'list':
            return MovieListSerializer
        return MovieSerializer

    @action(detail=False, methods=['get'])
    def trending(self, request):
        """Get trending movies (most recent with high ratings)"""
        trending_movies = Movie.objects.filter(rating__gte=4.0).order_by('-release_year', '-rating')[:10]
        serializer = MovieListSerializer(trending_movies, many=True, context={'request': request})
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def recommended(self, request):
        """Get recommended movies based on user preferences"""
        if request.user.is_authenticated:
            # Get user's favorite genres
            user_favorites = UserFavorite.objects.filter(user=request.user)
            favorite_genres = set()
            for favorite in user_favorites:
                favorite_genres.update(favorite.movie.genres.all())
            
            # Get movies from favorite genres
            if favorite_genres:
                recommended_movies = Movie.objects.filter(genres__in=favorite_genres).exclude(
                    userfavorite__user=request.user
                ).distinct().order_by('-rating')[:10]
            else:
                # Fallback to top rated movies
                recommended_movies = Movie.objects.order_by('-rating')[:10]
        else:
            # For non-authenticated users, return top rated movies
            recommended_movies = Movie.objects.order_by('-rating')[:10]
        
        serializer = MovieListSerializer(recommended_movies, many=True, context={'request': request})
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def toggle_favorite(self, request, pk=None):
        """Toggle favorite status for a movie"""
        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)
        
        movie = self.get_object()
        favorite, created = UserFavorite.objects.get_or_create(user=request.user, movie=movie)
        
        if not created:
            favorite.delete()
            return Response({'message': 'Removed from favorites'}, status=status.HTTP_200_OK)
        
        return Response({'message': 'Added to favorites'}, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['post'])
    def toggle_wishlist(self, request, pk=None):
        """Toggle wishlist status for a movie"""
        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)
        
        movie = self.get_object()
        wishlist_item, created = UserWishlist.objects.get_or_create(user=request.user, movie=movie)
        
        if not created:
            wishlist_item.delete()
            return Response({'message': 'Removed from wishlist'}, status=status.HTTP_200_OK)
        
        return Response({'message': 'Added to wishlist'}, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['post'])
    def add_comment(self, request, pk=None):
        """Add a comment to a movie"""
        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)
        
        movie = self.get_object()
        text = request.data.get('text')
        
        if not text:
            return Response({'error': 'Comment text is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        comment = Comment.objects.create(user=request.user, movie=movie, text=text)
        serializer = CommentSerializer(comment)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['get'])
    def search(self, request):
        """Search movies by various criteria"""
        query = request.query_params.get('q', '')
        genre = request.query_params.get('genre', '')
        year = request.query_params.get('year', '')
        
        queryset = Movie.objects.all()
        
        if query:
            queryset = queryset.filter(
                Q(title__icontains=query) |
                Q(description__icontains=query) |
                Q(director__icontains=query) |
                Q(actors__name__icontains=query)
            ).distinct()
        
        if genre:
            queryset = queryset.filter(genres__name__icontains=genre)
        
        if year:
            queryset = queryset.filter(release_year=year)
        
        serializer = MovieListSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)

class GenreViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    @action(detail=True, methods=['get'])
    def movies(self, request, pk=None):
        """Get all movies for a specific genre"""
        genre = self.get_object()
        movies = Movie.objects.filter(genres=genre)
        serializer = MovieListSerializer(movies, many=True, context={'request': request})
        return Response(serializer.data)

class ActorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    @action(detail=True, methods=['get'])
    def movies(self, request, pk=None):
        """Get all movies for a specific actor"""
        actor = self.get_object()
        movies = Movie.objects.filter(actors=actor)
        serializer = MovieListSerializer(movies, many=True, context={'request': request})
        return Response(serializer.data)

class UserFavoriteViewSet(viewsets.ModelViewSet):
    serializer_class = UserFavoriteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return UserFavorite.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UserWishlistViewSet(viewsets.ModelViewSet):
    serializer_class = UserWishlistSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return UserWishlist.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
