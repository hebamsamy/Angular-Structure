import { Component, OnInit } from '@angular/core';
import { ProductViewModel } from 'src/app/Models/ProductViewModel';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  readonly allowedPageSizes = [5, 10, 'all'];

  constructor(private ProductService:ProductService) { }
  data:ProductViewModel[]= [];
  displayMode="full"
  ngOnInit(): void {
    //
    this.ProductService.getList().subscribe(
      res=>this.data = res as ProductViewModel[]

    )







    
  }

}
