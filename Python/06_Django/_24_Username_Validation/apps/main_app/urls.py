from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^add_user$', views.add_user),
    url(r'^delete_user/(?P<id>\d+)$', views.delete_user),
    url(r'^success$', views.success),
]
