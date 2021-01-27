from django.urls import path
from .views import LabelDetailView, LabelListView


urlpatterns = [
    path('', LabelListView.as_view()),
    path('<int:pk>/', LabelDetailView.as_view()),
    # path('<int:pk>/favorite/', PokemonFavoriteView.as_view())
]
