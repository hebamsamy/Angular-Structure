import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  constructor() {}
  @Input() Index: number = 0;
  @Input() Count: number = 0;
  @Input() Size: number = 0;
  @Output() change = new EventEmitter<number>();
  arr = [];
  ngOnInit(): void {
    this.arr = this.arr[this.Count - 1];
  }
  handle(i: number) {
    this.change.emit(i);
  }
  incre(){
    this.Index++;
    this.handle(this.Index);
  }
  decre(){
    this.Index;
    this.handle(this.Index);
  }
}
