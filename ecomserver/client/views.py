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


from rest_framework import status
from .models import Register
from .serializers import Registerserializers

@api_view(['POST'])
def Registerview(request):
    print('front end data', request.data)
    mySerializer = Registerserializers(data=request.data)
    if mySerializer.is_valid():
        print("Validated Data:", mySerializer.validated_data)
        mySerializer.save()
        return Response({
            'Messages' : "Register successfully....! data saved",
             "data": mySerializer.data
        },status=status.HTTP_201_CREATED)
        
    return Response(
        mySerializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )


from .serializers import Registeruserdata
@api_view(['GET'])
def Registeruserdatas(request):
    myUserdata = Register.objects.all()
    print(myUserdata)
    myUserSerailizer = Registeruserdata(
        myUserdata,
        many = True
    )
    return Response(myUserSerailizer.data)


from .serializers import Registergetserializer
@api_view(['GET'])
def Registerget(request):
    myGetdata = Register.objects.all()
    print(myGetdata)
    myGetSerializer = Registergetserializer(
        myGetdata,
        many =True
    )
    return Response(myGetSerializer.data)



from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Register
from .serializers import Registergetserializer

@api_view(['PUT'])
def Registerupdate(request, id):

    try:
        mydata = Register.objects.get(id=id)
    except Register.DoesNotExist:
        return Response(
            {"error": "Employee not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    serializer = Registergetserializer(
        mydata,
        data=request.data
    )

    if serializer.is_valid():
        serializer.save()

        return Response({
            "message": "Employee updated successfully",
            "data": serializer.data
        })

    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def Registerdelete(request, id):

    try:
        mydata = Register.objects.get(id=id)
    except Register.DoesNotExist:
        return Response(
            {"error": "Employee not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    mydata.delete()

    return Response({
        "message": "Employee deleted successfully"
    }, status=status.HTTP_200_OK)


@api_view(['PATCH'])
def Registerupdate(request, id):

    try:
        mydata = Register.objects.get(id=id)
    except Register.DoesNotExist:
        return Response({"error": "Employee not found"}, status=404)

    serializer = Registergetserializer(
        mydata,
        data=request.data,
        partial=True
    )

    if serializer.is_valid():
        serializer.save()

        return Response({
            "message": "Updated Successfully",
            "data": serializer.data
        })

    return Response(serializer.errors, status=400)