
from ..serializers.common import ReleaseSerializer
from artists.serializers.common import ArtistSerializer


class PopulatedReleaseSerializer(ReleaseSerializer):

    artist = ArtistSerializer()