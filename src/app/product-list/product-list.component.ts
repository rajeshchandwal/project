import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable, filter } from 'rxjs';
import { MobileService } from '../service/mobile.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  private _filterString : string ="";
 
  get filterString(){
    return this._filterString;
  }

  set filterString(filter:string){
   this._filterString=filter;
  this.filteredProducts =  this.products.filter(product => product.productName.toLowerCase().includes(this._filterString))
  }
  
  filteredProducts:Product[] = [];
  products :  Product[] = [];
message:string="";
  noRatingClick(str:string){
this.message=str;
  }

  constructor(private mobileService :MobileService){
   
  }

  ngOnInit(): void{
    //this.products = this.mobileService.getAllMobiles();
    //data transfered in one single go
    this.mobileService.getAllMobiles().subscribe(data => this.products=data)
 this.filteredProducts = this.products;
  }

}
