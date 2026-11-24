from django.urls import path
from . import views

urlpatterns =[
    path('', views.Home, name='home'),
    path('api/emp',views.Empinfo, name='empinfo'),
    path('api/registerdata/',views.Registerview, name='registerdata'),
    path('api/erdata/',views.Registerget, name='erdata'),
    path('api/update/<int:id>/', views.Registerupdate, name='update'),
    path('api/delete/<int:id>/', views.Registerdelete, name='delete'),

    path('api/userdatas/', views.Registeruserdatas, name='userdatas')
]
      