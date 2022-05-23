import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export interface DialogData {
  request: 'EMPLOYEE.ID' | 'EMPLOYEE NAME' | 'DEPARTMENT' | 'DEPARTMENT NAME' | 'REQUESTED ID' | 'CREATED ID'| ' CREATED BY';
}


@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.css']
})
export class AddrequestComponent implements OnInit {
  
  Request!: Request[];
  constructor() { }

  ngOnInit(): void {
  }

  
}
