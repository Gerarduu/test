import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  productList: AngularFireList<any>
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.productList = this.firebase.list('products');
    console.log("Products list: ", this.productList);
    return this.productList;
  }

  insertProduct(inProduct: Product) {

    this.productList.push({
      name : inProduct.name,
      description : inProduct.description,
      price : inProduct.price
    });
  }

  updateProduct(inProduct: Product) {
    this.productList.update(inProduct.$key, {
      name : inProduct.name,
      description : inProduct.description,
      price : inProduct.price
    })
  }

  deleteProduct($key: string) {
    this.productList.remove($key);
  }
}
