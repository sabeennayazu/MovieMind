from rest_framework import serializers
from .models import Movie, Genre, Actor, UserFavorite, UserWishlist, Comment
from django.contrib.auth.models import User

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id', 'name']

class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = ['id', 'name', 'biography', 'birth_date', 'photo']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Comment
        fields = ['id', 'user', 'text', 'created_at']

class MovieSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True, read_only=True)
    actors = ActorSerializer(many=True, read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    is_favorite = serializers.SerializerMethodField()
    is_in_wishlist = serializers.SerializerMethodField()
    
    class Meta:
        model = Movie
        fields = [
            'id', 'title', 'description', 'release_year', 'poster', 
            'trailer_url', 'director', 'duration', 'rating', 'genres', 
            'actors', 'comments', 'is_favorite', 'is_in_wishlist', 
            'created_at', 'updated_at'
        ]
    
    def get_is_favorite(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return UserFavorite.objects.filter(user=request.user, movie=obj).exists()
        return False
    
    def get_is_in_wishlist(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return UserWishlist.objects.filter(user=request.user, movie=obj).exists()
        return False

class MovieListSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True, read_only=True)
    
    class Meta:
        model = Movie
        fields = ['id', 'title', 'release_year', 'poster', 'rating', 'genres']

class UserFavoriteSerializer(serializers.ModelSerializer):
    movie = MovieListSerializer(read_only=True)
    
    class Meta:
        model = UserFavorite
        fields = ['id', 'movie', 'created_at']

class UserWishlistSerializer(serializers.ModelSerializer):
    movie = MovieListSerializer(read_only=True)
    
    class Meta:
        model = UserWishlist
        fields = ['id', 'movie', 'created_at']
