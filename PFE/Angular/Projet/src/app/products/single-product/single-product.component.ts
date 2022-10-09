import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/Services/products.model';
import { ProductsService } from 'src/app/Services/products.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FeedbackComponent } from './feedback/feedback.component';
import { data } from 'jquery';
import { UsersService } from 'src/app/Services/users.service';
import { JsonPipe } from '@angular/common';
import { CompareComponent } from 'src/app/compare/compare.component';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  ngOnInit(): void {
  
  }

    
    
    }