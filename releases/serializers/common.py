from rest_framework.serializers import ModelSerializer
from ..models import Release

class ReleaseSerializer(ModelSerializer):
    """ Used for all incoming Release data """

    class Meta:
        model = Release
        fields = '__all__'
