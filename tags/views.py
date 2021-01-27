from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .serializers.common import TagSerializer
from .serializers.populated import PopulatedTagSerializer
from .models import Tag



class TagListView(APIView):
    """ Controller for get all tag requests """

    def get(self, _request):
        tags = Tag.objects.all()
        serialized_tag = PopulatedTagSerializer(tags, many=True)
        return Response(serialized_tag.data, status=status.HTTP_200_OK)


class TagDetailView(APIView):
    """ Controller for get single tag requests """

    def get_tag(self, pk):
        ''' returns tag from db by its pk(id) or responds 404 not found '''
        try:
            return Tag.objects.get(pk=pk)
        except Tag.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        tag = self.get_tag(pk=pk)
        serialized_tag = PopulatedTagSerializer(tag)
        return Response(serialized_tag.data, status=status.HTTP_200_OK)