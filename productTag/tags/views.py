from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.


def tagView(request):
    return HttpResponse('<h1> Hola </h1>')

