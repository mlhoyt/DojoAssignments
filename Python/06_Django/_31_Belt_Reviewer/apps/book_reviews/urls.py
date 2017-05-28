from django.conf.urls import url
from . import views

urlpatterns = [
    # render
    url(r'^books$', views.index, name="index"),
    # render
    url(r'^books/add$', views.add_book, name="add_book"),
    # render
    url(r'^books/(?P<id>\d+)$', views.view_book, name="view_book"),
    # render
    url(r'^users/(?P<id>\d+)$', views.view_user, name="view_user"),
    # render (DEBUG)
    url(r'^models_view$', views.models_view, name="models_view"),

    # action
    url(r'^books/add_review$', views.add_review, name="add_review"),
    # action
    url(r'^books/delete_review/(?P<id>\d+)$', views.delete_review, name="delete_review"),
    # action
    url(r'^books/add_book_and_review$', views.add_book_and_review, name="add_book_and_review"),

    # redirect
    url(r'^', views.catcher, name="catcher"),
]
