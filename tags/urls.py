from django.urls import path
from .views import TagDetailView, TagListView


urlpatterns = [
    path('', TagListView.as_view()),
    path('<int:pk>/', TagDetailView.as_view()),
    # path('<int:pk>/favorite/', PokemonFavoriteView.as_view())
]
