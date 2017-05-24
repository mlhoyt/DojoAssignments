from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^/$', views.most_popular, name="most_popular"),
    url(r'^add_secret$', views.add_secret, name="add_secret"),
]
