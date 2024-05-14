import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable, from, map, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'  //root means it is accessible to app-component as app-component canaccess means all child component can also access
})
export class MobileService {

 // mobiles : Product[] = [];


  constructor(private httpClient : HttpClient) { }

  httpsUrl = "http://localhost:4200/assets/products.json";
  getProduct(id:any):Observable<Product>{   //to fetch productbyId from Product-list displayed on screen
    return this.httpClient.get<Product[]>(this.httpsUrl)
    .pipe(map(prod =>
      {
        return prod.filter(Product => Product.productId ===id)[0];
      })
    )
  }



  getAllMobiles() :Observable<Product[]> {
    //return this.mobiles; earlier we were returning array of products
   return this.httpClient.get<Product[]>(this.httpsUrl); // when it hit with the url then it come back with Observable
    //return of(this.mobiles); //this from function convert array into Observable
    //from convert array to observable and emmit one after the other
    //of also convert array to observable but emmit all data at a time
  }


  value : number = 0;
getValue() {
  return this.value;
}

setValue(val : number) {
  this.value = val;
}

}
