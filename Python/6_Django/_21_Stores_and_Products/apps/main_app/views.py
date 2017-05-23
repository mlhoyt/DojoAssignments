from django.shortcuts import render, redirect
from .models import Product, Store

def index(request):
    context = {
        'products': Product.objects.all(),
        'stores': Store.objects.all(),
    }
    return render( request, "main_app/index.html", context )

def add_product_data():
    Product.objects.create(
        name = "Product1",
        description = "Description1",
        weight = "13",
        price = "12.34",
        cost = "5.67",
        category = "Category1"
    )
    Product.objects.create(
        name = "Product2",
        description = "Description2",
        weight = "24",
        price = "8.90",
        cost = "0.12",
        category = "Category2"
    )
    Product.objects.create(
        name = "Product3",
        description = "Description3",
        weight = "35",
        price = "3.45",
        cost = "2.34",
        category = "Category3"
    )
    Product.objects.create(
        name = "Product4",
        description = "Description4",
        weight = "47",
        price = "45.67",
        cost = "8.90",
        category = "Category4"
    )
    Product.objects.create(
        name = "Product5",
        description = "Description5",
        weight = "58",
        price = "567.89",
        cost = "123.45",
        category = "Category5"
    )

def add_store_data():
    Store.objects.create(
        name = "Store1"
    )
    Store.objects.get( name = "Store1" ).products.add(
        Product.objects.get( name = "Product1" ),
        Product.objects.get( name = "Product2" ),
        Product.objects.get( name = "Product3" ),
    )
    Store.objects.create(
        name = "Store2"
    )
    Store.objects.get( name = "Store2" ).products.add(
        Product.objects.get( name = "Product1" ),
        Product.objects.get( name = "Product2" ),
        Product.objects.get( name = "Product3" ),
    )
    Store.objects.create(
        name = "Store3"
    )
    Store.objects.get( name = "Store3" ).products.add(
        Product.objects.get( name = "Product3" ),
        Product.objects.get( name = "Product4" ),
        Product.objects.get( name = "Product5" ),
    )
    Store.objects.create(
        name = "Store4"
    )
    Store.objects.get( name = "Store4" ).products.add(
        Product.objects.get( name = "Product3" ),
        Product.objects.get( name = "Product4" ),
        Product.objects.get( name = "Product5" ),
    )
    Store.objects.create(
        name = "Store5"
    )
    Store.objects.get( name = "Store5" ).products.add(
        Product.objects.get( name = "Product1" ),
        Product.objects.get( name = "Product2" ),
        Product.objects.get( name = "Product3" ),
        Product.objects.get( name = "Product4" ),
        Product.objects.get( name = "Product5" ),
    )

def add_data(request):
    add_product_data()
    add_store_data()
    # for i in Store.objects.get( name = "Store1" ).products.all():
    #     print i.id, i.name
    return redirect( "/" )

def remove_data(request):
    Product.objects.all().delete()
    Store.objects.all().delete()
    return redirect( "/" )
