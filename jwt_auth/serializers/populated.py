from ..serializers.common import UserSerializer
# from releases.serializers.common import ReleaseSerializer
from releases.serializers.populated import PopulatedReleaseSerializer


class PopulatedUserSerializer(UserSerializer):

    favourited_releases = PopulatedReleaseSerializer(many=True)