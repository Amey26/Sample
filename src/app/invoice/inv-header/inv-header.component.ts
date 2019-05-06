import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { City } from '../../models/product.model';
import { Customer } from '../../models/customer.model';
@Component({
  selector: 'app-inv-header',
  templateUrl: './inv-header.component.html',
  styleUrls: ['./inv-header.component.css']
})
export class InvHeaderComponent implements OnInit {
  //customers:Customer[];
  cities: City[];
  selectedCity: string;
  selectedCustomer:string;
  customers:Customer[];
  constructor(private customerService : CustomerService) { 
    this.cities = [
      {label: 'New York', value: 'NY'},
      {label: 'Rome', value: 'RM'},
      {label: 'London', value: 'LDN'},
      {label: 'Istanbul', value: 'IST'},
      {label: 'Paris', value: 'PRS'}
  ]
  }

  ngOnInit() {

    this.customerService.getCustomers().subscribe(data => {
      console.log(data);
      this.customers = data;
  });
  }

}
