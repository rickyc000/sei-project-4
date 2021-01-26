from rest_framework.serializers import ModelSerializer
from ..models import Artist

class ArtistSerializer(ModelSerializer):
    """ Used for all incoming Artist data """

    class Meta:
        model = Artist
        fields = '__all__'
