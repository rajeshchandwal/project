import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from '../service/mobile.service';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product: Observable<Product> | any;
productId:any;
  constructor(private route: ActivatedRoute,
              private service: MobileService,
              private router: Router){ //ActivatedRoute refer to the current route mentioned in app.module.ts
  }
 
  ngOnInit(): void{
   // const id = this.route.snapshot.paramMap.get('id') ; //snapshot help to get particular  value between two didfferent component
    // when there is a same component then snapshot doesnot work
    //this.productId = id;
  //this.product = this.service.getProduct(this.productId);
    //this.service.getProduct(id).subscribe(data => this.product = data)
    
    //to get value with in same component use subscribe 
    this.route.paramMap.subscribe(paraMap =>
      {
        const id = paraMap.get('id');
        console.log(id);
       this.productId = id;
        if(! isNaN(this.productId)){
 this.product = this.service.getProduct(this.productId);
        }
      })
  }
  onBack1(){
this.router.navigate(['/products']);  //to Navigate back
  }

  onNext(){
    this.productId++;
    this.router.navigate(['/products',this.productId]);
  }
  onPrevious(){
    this.productId--;
    this.router.navigate(['/products',this.productId]);
  }

 
}
