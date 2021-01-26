from ..serializers.common import ArtistSerializer
from releases.serializers.common import ReleaseSerializer


class PopulatedArtistSerializer(ArtistSerializer):

    releases = ReleaseSerializer(many=True)