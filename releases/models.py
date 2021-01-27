from django.db import models

class Release(models.Model):
    title = models.CharField(max_length=100, unique=False)
    release_year = models.PositiveIntegerField(unique=False)
    artwork = models.CharField(max_length=300)
    description = models.TextField
    buy_link = models.CharField(max_length=300)
    artist = models.ForeignKey(
        "artists.Artist",
        related_name="releases",
        on_delete=models.CASCADE
    )
    label = models.ForeignKey(
      "labels.Label",
      related_name="label_releases",
      on_delete=models.CASCADE
    )
    tags = models.ManyToManyField(
      'tags.Tag',
      related_name="tags",
      blank=True)

    def __str__(self):
        return f"{self.title}"

