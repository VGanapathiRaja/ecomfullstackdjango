from django.shortcuts import render
from django.http import HttpResponse,request


# Create your views here.
def Home(request):
    return HttpResponse("hii hello world...!!")

from rest_framework.decorators import api_view
from rest_framework.response import Response
@api_view(["GET"])
def Empinfo(request):
    datas =[
        {
            "id": 1,
            "empname": "vgr",
            "emprole" : "Deveveloper",
            "empsalary" : 50000.00
        },
        {
            "id": 2,
            "empname": "visal",
            "emprole" : "full Deveveloper",
            "empsalary" : 55000.00
        },
        {
            "id": 3,
            "empname": "nirmal",
            "emprole" : "db Deveveloper",
            "empsalary" : 60000.00
        },
        {
            "id": 4,
            "empname": "kiruthika",
            "emprole" : "Front Deveveloper",
            "empsalary" : 50000.00
        }

    ]
    return Response(datas)