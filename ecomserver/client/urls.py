from django.urls import path
from . import views

urlpatterns =[
    path('', views.Home, name='home'),
    path('api/emp',views.Empinfo, name='empinfo')
]
