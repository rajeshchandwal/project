import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { CourseComponent } from './student/course/course.component';
import { CourseListComponent } from './employee/course-list/course-list.component';
import { MeComponent } from './me/me.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ShortStrPipe } from './shortstr.pipe';
import { FilterPipe } from './filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './star/star.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { HomeComponent } from './home/home.component' 
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularUICrudComponent } from './angular-uicrud/angular-uicrud.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { StarUIUXComponent } from './star-uiux/star-uiux.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const routes :Routes = [
  {path:'productList',component:DialogComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductListComponent},
  {path:'products/:id',component:ProductDetailComponent},
  {path : '',redirectTo:'/home', pathMatch : 'full'},
  {path:'**',component:PageNotFoundComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    CourseComponent,
    CourseListComponent,
    MeComponent,
    DirectiveDemoComponent,
    PipeDemoComponent,
    ShortStrPipe,
    FilterPipe,
    HighlightDirective,
    ProductListComponent,
    StarComponent,
    ObservableDemoComponent,
    HomeComponent,
    ProductDetailComponent,
    AngularUICrudComponent,
    DialogComponent,
    StarUIUXComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, //forRoot(routes) means registered all the routes
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
