import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-angular-uicrud',
  templateUrl: './angular-uicrud.component.html',
  styleUrls: ['./angular-uicrud.component.css']
})
export class AngularUICrudComponent implements OnInit{

  displayedColumns: string[] = ['productName', 'category', 'date', 'freshness', 'price', 'Comment', 'action'];

  dataSource!: MatTableDataSource<any> ;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog : MatDialog, private api : ApiService){

  }
  IsWait = true;
  counter=1;
  apiTimer : any;
  ngOnInit(): void {
    //this.getAllProducts();
   
   this.apiTimer= setInterval(() => {
              this.getAllProducts()
            }, (this.counter*6000));
  }
  openDialog() {
    //1) adding data
    this.dialog.open(DialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val=='Save'){
      this.getAllProducts();
      }
    });
  }


  
  getAllProducts(){
    this.IsWait = false;
this.api.getProduct()
.subscribe({
  next:(res)=>{
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator= this.paginator;
    this.dataSource.sort = this.sort;
  },
  error:(err)=>{
    alert("Error while fetching the records !!");
  }
});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editProduct(row : any){
    //2)update Product
    this.dialog.open(DialogComponent,{
width:'30%',
data:row
    }).afterClosed().subscribe(val=>{
      if(val=='Update'){
      this.getAllProducts();
      }
    });
  }

  deleteProduct(id:number){
this.api.deleteProduct(id)
.subscribe({
  next:(res)=>{
    alert("Product deleted successfully !!");
    this.getAllProducts();
  },
  error:(err)=>{
    alert("Error while deleting the record!!");
  }
})
  }


}
