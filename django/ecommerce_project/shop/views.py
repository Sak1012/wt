from django.shortcuts import render, redirect
from .models import Product, CartItem

def product_list(request):
    products = Product.objects.all()
    return render(request, 'shop/product_list.html', {'products': products})

def add_to_cart(request, product_id):
    product = Product.objects.get(pk=product_id)
    cart_item, created = CartItem.objects.get_or_create(product=product)
    if not created:
        cart_item.quantity += 1
        cart_item.save()
    return redirect('product_list')

def view_cart(request):
    cart_items = CartItem.objects.all()
    return render(request, 'shop/cart.html', {'cart_items': cart_items})


