from ..serializers.common import UserSerializer
from releases.serializers.common import ReleaseSerializer


class PopulatedUserSerializer(UserSerializer):

    favourited_releases = ReleaseSerializer(many=True)