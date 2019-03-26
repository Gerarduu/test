import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//Services
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getData();
    this.resetForm()
  }

  onSubmit(productForm : NgForm ) {
    this.productService.insertProduct(productForm.value);
    this.resetForm();
  }

  resetForm(productForm? : NgForm) {

    if(productForm != null) {
  
      productForm.reset();
      this.productService.selectedProduct = {
        $key : null,
        name : '',
        description : '',
        price : 0
      };
    }
  }
}
