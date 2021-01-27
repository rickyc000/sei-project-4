from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated

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


class ReleaseFavouriteView(ReleaseDetailView):

    permission_classes = (IsAuthenticated, )

    def post(self, request, pk):
        release_to_favourite = self.get_release(pk=pk)
        release_to_favourite.favourited_by.add(request.user.id)
        release_to_favourite.save()
        serialized_favourited_release = PopulatedReleaseSerializer(release_to_favourite)
        return Response(serialized_favourited_release.data, status=status.HTTP_201_CREATED)

    def delete(self, request, pk):
        release_to_delete = self.get_release(pk=pk)
        release_to_delete.favourited_by.remove(request.user.id)
        release_to_delete.save()
        return Response(status=status.HTTP_200_OK)

