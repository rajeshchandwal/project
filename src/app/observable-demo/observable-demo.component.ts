import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit, OnDestroy{

  constructor(){}

  ngOnInit(): void {
    
    const   myObserver = {
      next : (data:any) => console.log(data),
      err : (err:any) => console.error(err),
      complete: () =>console.log('all data received')
    }

   const myObservable = new Observable(observer => {
    observer.next('next');
    observer.next('5000');
    observer.next('data3');
    setTimeout(()=>{
      observer.next('data4');
      observer.next('data5');
      observer.next('data6');
    },4000)
    
   });
   
   var promise = new Promise((resolve, reject) => { 
    resolve("Promise Resolved"); 
}) 

 const subject = new Subject


promise.then((success) => { 
  console.log(success); 
}) 


   this.subscription = myObservable.subscribe(myObserver);

   //
 
  }
  subscription :Subscription = new Subscription;
  ngOnDestroy() {
    //cleanUp
    //called when the component is removed from current DOM
    console.log('destroying component');
    this.subscription.unsubscribe(); //to unsubscribe the observable
  }

}
