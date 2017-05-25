from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^add_predefined_data$', views.add_predefined_data),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^status$', views.status),
    url(r'^success$', views.success),
    url(r'^logout$', views.logout),
]
