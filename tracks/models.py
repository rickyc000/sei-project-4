from django.db import models

class Track(models.Model):
    title = models.CharField(max_length=100, unique=False)
    disc_number = models.PositiveIntegerField(unique=False)
    artist_name = models.CharField(max_length=100, unique=False)
    preview_URL = models.CharField(max_length=300)
    duration_ms = models.PositiveIntegerField(unique=False)
    release = models.ForeignKey(
      "releases.Release",
      related_name="tracks",
      on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.title}"