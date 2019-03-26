import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/product.service';

import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    var x = this.productService.getData();
    x.snapshotChanges().subscribe(item => {
      this.productList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.productList.push(y as Product);
        console.log(this.productList);
      })
    })
  }
}
