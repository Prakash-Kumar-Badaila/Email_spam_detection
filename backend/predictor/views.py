from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from.predict import predict_email
@api_view(['POST'])
def predict(request):
    email = request.data.get('email')
    label,confidence = predict_email(email)
    return Response({'label': label, 'confidence': confidence})

