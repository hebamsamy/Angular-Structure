import { Component, OnInit } from '@angular/core';
import { JopServices } from 'src/app/Services/jop.service';
import {Job} from '../../Models/test';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private JobServices:JopServices) { }
  data:Job[]=[];
  Index :number = 1
  Size :number = 1;
  Pages :number = 2;
  isloading =true;
  ngOnInit(): void {
    this.JobServices.getlist(this.Index,this.Size).subscribe(
      res=>{
        this.data= res.Data.Items;
        this.Index = res.Data.PageIndex;
        this.Size = res.Data.PageSize;
        this.Pages = res.Data.Pages;
        this.isloading = false;
      }
    )
  }
  pageChanged(i:number){
    alert("pageChanged")
  }

}
