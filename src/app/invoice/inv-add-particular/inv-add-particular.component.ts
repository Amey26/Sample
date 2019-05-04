import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms'
import { ProductService } from '../../services/product.service';
import {switchMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-inv-add-particular',
  templateUrl: './inv-add-particular.component.html',
  styleUrls: ['./inv-add-particular.component.css']
})
export class InvAddParticularComponent implements OnInit {
  productNames: string[];
  queryField: FormControl = new FormControl();
  
  constructor(private productService : ProductService ) { }

  ngOnInit() {
    this.queryField.valueChanges.pipe(
     debounceTime(200),
     distinctUntilChanged(),
     switchMap((query) =>  this.productService.searchProductNames(query)))
    .subscribe(data => {
      console.log(data.map(d => d.Particular));
      this.productNames = data.map(d => d.Particular); 
    });
  }

}
