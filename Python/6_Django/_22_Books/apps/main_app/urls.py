from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^add_predefined_data$', views.add_predefined_data),
    url(r'^remove_all_data$', views.remove_all_data),
    url(r'^add_book$', views.add_book),
]
