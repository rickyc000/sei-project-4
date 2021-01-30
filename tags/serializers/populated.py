from ..serializers.common import TagSerializer
from releases.serializers.populated import NestedReleaseSerializer

class PopulatedTagSerializer(TagSerializer):

    tags = NestedReleaseSerializer(many=True)