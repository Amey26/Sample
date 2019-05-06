import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Customer} from "../models/customer.model";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get("../app/Data/Customer.json").pipe(
      map((data: any[]) => data["Customer"].map((custJson: any) =>
        new Customer(
          custJson.id,
          custJson.name
      ))),
    );      
  }
   
}
