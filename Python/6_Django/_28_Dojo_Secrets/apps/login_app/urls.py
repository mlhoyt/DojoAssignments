from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^register$', views.register, name="register"),
    url(r'^login$', views.login, name="login"),
    url(r'^status$', views.status, name="status"),
    url(r'^logout$', views.logout, name="logout"),

    url(r'^add_predefined_data$', views.add_predefined_data),
    url(r'^', views.catcher, name="catcher"),
]
