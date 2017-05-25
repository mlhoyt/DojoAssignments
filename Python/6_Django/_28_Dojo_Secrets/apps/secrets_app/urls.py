from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^/$', views.most_popular, name="most_popular"),
    url(r'^add_secret$', views.add_secret, name="add_secret"),
    url(r'^delete_secret/(?P<id>\d+)$', views.delete_secret, name="delete_secret"),
    url(r'^add_like/(?P<s_id>\d+)/(?P<u_id>\d+)$', views.add_like, name="add_like"),
    url(r'^/db_debug$', views.db_debug),
]
