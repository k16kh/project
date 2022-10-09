import { getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
Id:string=null;
name:string=null;
constructor(public service:UsersService,private toaster:ToastrService,private router:Router) { }
ngOnInit(): void {
  
}

  
  
  }