from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    MovieViewSet, GenreViewSet, ActorViewSet, 
    UserFavoriteViewSet, UserWishlistViewSet
)

router = DefaultRouter()
router.register(r'movies', MovieViewSet)
router.register(r'genres', GenreViewSet)
router.register(r'actors', ActorViewSet)
router.register(r'favorites', UserFavoriteViewSet, basename='favorite')
router.register(r'wishlist', UserWishlistViewSet, basename='wishlist')

urlpatterns = [
    path('api/', include(router.urls)),
] 