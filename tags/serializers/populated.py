from ..serializers.common import TagSerializer
from releases.serializers.common import ReleaseSerializer

class PopulatedTagSerializer(TagSerializer):

    tags = ReleaseSerializer(many=True)