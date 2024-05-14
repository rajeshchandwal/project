import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{

  freshnessList = ["Brand New", "Second hand", "Refurbished"];
productForm !: FormGroup;
actionBtn : string ="Save";
  constructor(private formBuilder: FormBuilder, private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,// //2)update Product MAT_DIALOG_DATA will inject row data into editData
    private dialogRef:MatDialogRef<DialogComponent>){}
  ngOnInit(): void {
   this.productForm = this.formBuilder.group({
productName : ['',Validators.required],
category : ['', Validators.required],
freshness : ['', Validators.required],
price : ['', Validators.required],
date : ['', Validators.required],
Comment : ['',Validators.required]
   });

  if(this.editData){
    this.actionBtn ="Update";
this.productForm.controls['productName'].setValue(this.editData.productName);
this.productForm.controls['category'].setValue(this.editData.category);
this.productForm.controls['freshness'].setValue(this.editData.freshness);
this.productForm.controls['price'].setValue(this.editData.price);
this.productForm.controls['date'].setValue(this.editData.date);
this.productForm.controls['Comment'].setValue(this.editData.Comment);
  }
    
  }
  addProduct(){
    console.log(this.editData);
   if(this.editData){  //this.updateProduct();

     //2)update Product
    this.updateProduct();
   }else{
    //1) adding data
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("product added successfully");
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error:(err)=>{
          alert("error while adding the product");
        }
      })
    }
    
  }
   
  }
  updateProduct(){
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product updated succesfully !!");
        this.productForm.reset();
        this.dialogRef.close('Update');
      },
      error:(err)=>{
        alert("Error occured while updating the record");
      }
    })
    
   }

}
