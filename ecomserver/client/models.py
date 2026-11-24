from django.db import models

# Create your models here.
   
class Register(models.Model):
      RName = models.CharField(max_length=50) 
      REmail = models.EmailField(max_length=50) 
      RMobile = models.CharField(max_length=50)
      RPassword = models.CharField(max_length=50)
      RCPassword = models.CharField(max_length=50)
      Rinfo = models.CharField(max_length=100)

      def __str__(self):
            return self.RName
     