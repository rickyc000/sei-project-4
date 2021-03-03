from django.contrib import admin
from django.urls import path, include, re_path
from .views import index
from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic.base import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/releases/', include('releases.urls')),
    path('api/auth/', include('jwt_auth.urls')),
    path('api/artists/', include('artists.urls')),
    path('api/labels/', include('labels.urls')),
    path('api/tags/', include('tags.urls')),
    path('favicon.ico', RedirectView.as_view(url=staticfiles_storage.url('img/rr-logo.ico'))),
    re_path(r'^.*$', index),
]
