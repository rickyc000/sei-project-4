from django.urls import path
from .views import ReleaseListView, ReleaseDetailView


urlpatterns = [
    path('', ReleaseListView.as_view()),
    path('<int:pk>/', ReleaseDetailView.as_view()),
    # path('<int:pk>/favorite/', PokemonFavoriteView.as_view())
]
