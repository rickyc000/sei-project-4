from rest_framework.serializers import ModelSerializer
from ..models import Label

class LabelSerializer(ModelSerializer):
    """ Used for all incoming Label data """

    class Meta:
        model = Label
        fields = '__all__'
