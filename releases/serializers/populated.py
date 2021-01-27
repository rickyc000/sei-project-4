
from ..serializers.common import ReleaseSerializer
from artists.serializers.common import ArtistSerializer
from labels.serializers.common import LabelSerializer
from tracks.serializers.common import TrackSerializer
from tags.serializers.common import TagSerializer


class PopulatedReleaseSerializer(ReleaseSerializer):

    artist = ArtistSerializer()
    label = LabelSerializer()
    tracks = TrackSerializer(many=True)
    tags = TagSerializer(many=True)