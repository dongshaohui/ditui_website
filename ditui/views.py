from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect

# Create your views here.


def index(request):
	return render(request,'contents/index.html')