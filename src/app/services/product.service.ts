import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable } from 'rxjs';
import {Product} from "../models/product.model";
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
}
  public getProducts(): Observable<Product[]> {
    return this.http.get("../app/Data/Product.json").pipe(
      map((data: any[]) => data["Product"].map((productJson: any) =>
        new Product(
        productJson.Code,
        productJson.Particular,
        productJson.Unit,
        productJson.Price
      ))),
    );      
  }

  public searchProductNames(keyword: string): Observable<any[]> {
    return this.http.get("../app/Data/Product.json").pipe(
      map((data: any[]) => data["Product"].filter( 
        p => p.Particular.toLowerCase().startsWith(keyword.toLowerCase() )
        ) ),
    );      
  }
}

