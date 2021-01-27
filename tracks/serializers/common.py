from rest_framework.serializers import ModelSerializer
from ..models import Track

class TrackSerializer(ModelSerializer):
    """ Used for all incoming Track data """

    class Meta:
        model = Track
        fields = '__all__'
