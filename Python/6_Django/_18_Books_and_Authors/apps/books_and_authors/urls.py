from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^add_data$', views.add_data),
    url(r'^remove_data$', views.remove_data),
]
