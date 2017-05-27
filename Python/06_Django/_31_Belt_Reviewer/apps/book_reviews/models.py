from __future__ import unicode_literals

from django.db import models
## aggregate functions
# from django.db.models import Count
## ORM tables from other apps
from ..login.models import Users

############################## Authors ##############################

class AuthorsManager( models.Manager ):
    def add( self, name ):
        authors = self.filter( name = name )
        if authors:
            return authors[0]
        else:
            return self.create( name = name )

class Authors( models.Model ):
    name = models.CharField( max_length = 255 )
    created_at = models.DateTimeField( auto_now_add = True )
    updated_at = models.DateTimeField( auto_now = True )

    objects = AuthorsManager()

############################## Books ##############################

class BooksManager( models.Manager ):
    def add( self, title, author ):
        books = self.filter( title = title )
        if books:
            return books[0]
        else:
            return self.create( title = title, author = author )

    def add_book_and_review( self, user_id, postData ):
        errors = []

        # validate title
        if len( postData['title'] ) < 1:
            errors.append( "The title field is empty" )

        # validate author
        if postData['choose_author'] == "unselected" and len( postData['new_author'] ) < 1:
            errors.append( "No author is selected or entered (to be added)" )

        # validate review
        if len( postData['review'] ) < 1:
            errors.append( "The review field is empty" )

        # validate rating
        if postData['rating'] == "unselected":
            errors.append( "A rating must be selected" )

        if errors:
            return {
                'status': False,
                'errors': errors,
            }
        else:
            # get/create author
            author = None
            if postData['choose_author'] == "unselected":
                author = Authors.objects.add( postData['new_author'] )
            else:
                author = Authors.objects.add( postData['choose_author'] )
            # get/create book (using above author)
            book = self.add(
                postData['title'],
                author,
            )
            # create review (using above book)
            Reviews.objects.add(
                postData['review'],
                postData['rating'],
                Users.objects.get( id = user_id ),
                book,
            )

            return {
                'status': True,
                'book': book,
            }

class Books( models.Model ):
    title = models.CharField( max_length = 255 )
    author = models.ForeignKey( Authors, related_name = "authored_books" )
    created_at = models.DateTimeField( auto_now_add = True )
    updated_at = models.DateTimeField( auto_now = True )

    objects = BooksManager()

############################## Reviews ##############################

class ReviewsManager( models.Manager ):
    def add( self, comments, rating, author, book ):
        return self.create( comments = comments, rating = rating, author = author, book = book )

    def add_review( self, user_id, postData ):
        errors = []

        # validate review
        if len( postData['review'] ) < 1:
            errors.append( "The review field is empty" )

        # validate rating
        if postData['rating'] == "unselected":
            errors.append( "A rating must be selected" )

        if errors:
            return {
                'status': False,
                'errors': errors,
            }
        else:
            return {
                'status': True,
                'review': self.create(
                    comments = postData['review'],
                    rating = postData['rating'],
                    author = Users.objects.get( id = user_id ),
                    book = Books.objects.get( id = int( postData['book_id'] ) ),
                )
            }

    def remove( self, id ):
        if len( self.filter( id = id ) ) == 1:
            self.get( id = id ).delete()
        return True

    def recent( self ):
        return self.order_by( '-created_at' )[:3]

class Reviews( models.Model ):
    rating = models.IntegerField()
    comments = models.TextField()
    author = models.ForeignKey( Users, related_name = "authored_reviews" )
    book = models.ForeignKey( Books, related_name = "reviews" )
    created_at = models.DateTimeField( auto_now_add = True )
    updated_at = models.DateTimeField( auto_now = True )

    objects = ReviewsManager()
