import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-inv-add',
  templateUrl: './inv-add.component.html',
  styleUrls: ['./inv-add.component.css']
})
export class InvAddComponent implements OnInit {
  products: Product[];
  
  constructor(private productService : ProductService ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
  });
  
  } 

}
