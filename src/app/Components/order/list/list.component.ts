import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/Models/test';
import { JopServices } from 'src/app/Services/jop.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private JobServices: JopServices) {}

  page: number = 1; //current page number
  count: number = 1; //total pages

  //number of elements to get form database per request
  tableSize: number = 1;
  tableSizes: any = [1, 5, 10, 20];

  data: Job[] = [];

  isloading = true;
  ngOnInit(): void {
    this.fetchData();
  }
  pageChanged(i: number) {
    alert('pageChanged');
  }
  fetchData(): void {
    this.isloading = true;
    this.JobServices.getlist(this.page, this.tableSize).subscribe(
      (response) => {
        console.log(response);
        this.page = response.Data.PageIndex;
        this.tableSize = response.Data.PageSize;
        this.count = response.Data.Pages;

        this.data = response.Data.Items;
        this.isloading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  onTableDataChange(event: any) {
    console.log(event);
    this.page = event;
    this.fetchData();
  }
  onTableSizeChange(event: any): void {
    console.log(event.target.value);
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchData();
  }
}
