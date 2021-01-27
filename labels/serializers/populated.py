from ..serializers.common import LabelSerializer
from releases.serializers.common import ReleaseSerializer

class PopulatedLabelSerializer(LabelSerializer):

    label_releases = ReleaseSerializer(many=True)