from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Register

#method # # 1
# class Registerserializers(serializers.Serializer):
#       class Meta:
#             model = Register
#             fields = ['RName', 'REmail', 'RMobile', 'RPassword', 'RCPassword', 'Rinfo']


#method # # 2
# class Registerserializers(serializers.Serializer):
#       class Meta:
#             model = Register
#             fields = '__all__'

#METHOD ##3
class Registerserializers(serializers.Serializer):
      RName = serializers.CharField(max_length=50) 
      REmail = serializers.EmailField(max_length=50) 
      RMobile = serializers.CharField(max_length=50)
      RPassword = serializers.CharField(max_length=50)
      RCPassword = serializers.CharField(max_length=50)
      Rinfo = serializers.CharField(max_length=100)
      
      def create(self, validated_data):
            return Register.objects.create(**validated_data)
      

class Registergetserializer(serializers.ModelSerializer) :
      class Meta :
            model = Register
            fields = '__all__'

class Registeruserdata(serializers.ModelSerializer):
      class Meta:
            model = Register
            fields = '__all__'