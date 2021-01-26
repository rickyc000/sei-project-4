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

    def __str__(self):
        return f"{self.title}"

