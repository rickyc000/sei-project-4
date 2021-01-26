from django.urls import path
from .views import ArtistDetailView, ArtistListView


urlpatterns = [
    path('', ArtistListView.as_view()),
    path('<int:pk>/', ArtistDetailView.as_view()),
    # path('<int:pk>/favorite/', PokemonFavoriteView.as_view())
]
