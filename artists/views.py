from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .serializers.common import ArtistSerializer
from .serializers.populated import PopulatedArtistSerializer
from .models import Artist



class ArtistListView(APIView):
    """ Controller for get all artist requests """

    def get(self, _request):
        artists = Artist.objects.all()
        serialized_artist = PopulatedArtistSerializer(artists, many=True)
        return Response(serialized_artist.data, status=status.HTTP_200_OK)


class ArtistDetailView(APIView):
    """ Controller for get single artist requests """

    def get_artist(self, pk):
        ''' returns artist from db by its pk(id) or responds 404 not found '''
        try:
            return Artist.objects.get(pk=pk)
        except Artist.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        artist = self.get_artist(pk=pk)
        serialized_artist = PopulatedArtistSerializer(artist)
        return Response(serialized_artist.data, status=status.HTTP_200_OK)