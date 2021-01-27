from django.urls import path
from .views import ReleaseListView, ReleaseDetailView, ReleaseFavouriteView


urlpatterns = [
    path('', ReleaseListView.as_view()),
    path('<int:pk>/', ReleaseDetailView.as_view()),
    path('<int:pk>/favourite/', ReleaseFavouriteView.as_view())
]
