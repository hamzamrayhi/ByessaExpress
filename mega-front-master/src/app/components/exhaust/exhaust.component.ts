import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
//import {ProductModelServer, serverResponse} from "../../models/product.model";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import { ProductModelServer } from '../../models/product.model';

@Component({
  selector: 'mg-exhaust',
  templateUrl: './exhaust.component.html',
  styleUrls: ['./exhaust.component.scss']
})
export class ExhaustComponent implements OnInit {
  products: ProductModelServer[] = [];
  

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router:Router) {
  }

  ngOnInit() {
    this.productService.getProductsFromCategory("exhaust").subscribe((prods:ProductModelServer[] ) => {
      this.products = prods.products;
     console.log(this.products);
    });
    }
  
   AddProduct(id: Number) {
     this.cartService.AddProductToCart(id);
   }

   selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }

}

