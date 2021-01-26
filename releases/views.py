from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Release
from .serializers.common import ReleaseSerializer
from .serializers.populated import PopulatedReleaseSerializer


class ReleaseListView(APIView):
    ''' Controller for get request to /releases endpoint '''


    def get(self, _request):
        releases = Release.objects.all()
        serialized_release = PopulatedReleaseSerializer(releases, many=True)
        return Response(serialized_release.data, status=status.HTTP_200_OK)



class ReleaseDetailView(APIView):
    ''' Controller for get request to /pokemons/id(pk) endpoint '''

    def get_release(self, pk):
        ''' returns release from db by its pk(id) or responds 404 not found '''
        try:
            return Release.objects.get(pk=pk)
        except Release.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        release = self.get_release(pk=pk)
        serialized_release = PopulatedReleaseSerializer(release)
        return Response(serialized_release.data, status.HTTP_200_OK)

