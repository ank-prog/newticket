import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {

  priority:any='Low';
  dtOptions:DataTables.Settings={};
  constructor() {
    this.dtOptions={
    pagingType:'full_numbers',
    pageLength:3,
    lengthMenu:[3,5,7],
    processing:true
  } }

  ngOnInit(): void {
  }
  ngOnChanges(){

    this.dtOptions={
    pagingType:'full_numbers',
    pageLength:10,
    lengthMenu:[5,10,15],
    processing:true
  }

  }
  printComponent() {


    let originalContents = document.body.innerHTML;

    window.print();

    document.body.innerHTML = originalContents;
}
}
