from django.contrib import admin
from .models import Post # add this

class PostAdmin(admin.ModelAdmin):  # add this
  list_display = ('title', 'message', 'date') # add this

# Register your models here.
admin.site.register(Post, PostAdmin) # add this
