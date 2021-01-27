from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .serializers.common import LabelSerializer
from .serializers.populated import PopulatedLabelSerializer
from .models import Label

class LabelListView(APIView):
    """ Controller for get all label requests """

    def get(self, _request):
        labels = Label.objects.all()
        serialized_label = PopulatedLabelSerializer(labels, many=True)
        return Response(serialized_label.data, status=status.HTTP_200_OK)


class LabelDetailView(APIView):
    """ Controller for get single label requests """

    def get_label(self, pk):
        ''' returns label from db by its pk(id) or responds 404 not found '''
        try:
            return Label.objects.get(pk=pk)
        except Label.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        label = self.get_label(pk=pk)
        serialized_label = PopulatedLabelSerializer(label)
        return Response(serialized_label.data, status=status.HTTP_200_OK)