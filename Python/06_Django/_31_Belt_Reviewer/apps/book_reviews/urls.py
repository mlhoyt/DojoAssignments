from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^add$', views.add_book, name="add_book"),

    url(r'^add_book_and_review$', views.add_book_and_review, name="add_book_and_review"),

    url(r'^', views.catcher, name="catcher"),
]
