from django.urls import include, path
from . import views

urlpatterns = [
    #Main view for uploading xml files generated by imagelabel
    path('tagFile/', views.tagView, name = "tagView")
]