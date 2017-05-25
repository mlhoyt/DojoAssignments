from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^add_predefined_data$', views.add_predefined_data),
    url(r'^add_course$', views.add_course),
    url(r'^remove_course/(?P<id>\d+)$', views.remove_course),
    url(r'^remove_course/(?P<id>\d+)/confirm$', views.remove_course_confirm),
]
