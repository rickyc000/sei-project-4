from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/releases/', include('releases.urls')),
    path('api/auth/', include('jwt_auth.urls')),
    path('api/artists/', include('artists.urls')),
    path('api/labels/', include('labels.urls')),
    path('api/tags/', include('tags.urls')),
    re_path(r'^.*$', index),
]
