from rest_framework.serializers import ModelSerializer
from ..models import Tag

class TagSerializer(ModelSerializer):
    """ Used for all incoming Tag data """

    class Meta:
        model = Tag
        fields = '__all__'
