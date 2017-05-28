from django.conf.urls import url
from . import views

urlpatterns = [
    # render
    url(r'^$', views.index, name="index"),

    # action
    url(r'^register$', views.register, name="register"),
    # action
    url(r'^login$', views.login, name="login"),
    # action
    url(r'^logout$', views.logout, name="logout"),

    # redirect
    # url(r'^', views.catcher, name="catcher"),
]
