import { Component, OnInit, Input} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { SmoothieShort, SmoothiesService } from '../smoothies.service';
@Component({
  selector: 'app-recipe-action',
  templateUrl: './recipe-action.component.html',
  styleUrls: ['./recipe-action.component.css']
})

export class RecipeActionComponent implements OnInit {
   // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageIndex = 0;

  // MatPaginator Output
  pageEvent: PageEvent;

  smoothies: SmoothieShort[];

  constructor(private smoothiesService: SmoothiesService) {

  }

  ngOnInit() {
    let from = this.pageIndex * this.pageSize + 1;
    let to = from + this.pageSize - 1;
    this.getSmoothies(from, to);
  }

  getSmoothies(fromValue, toValue) {
    this.smoothiesService.getNumRecords().subscribe((data) => {
      this.length = data.countRecords;
      let from = fromValue;
      let to = toValue;
      if (from > this.length) {from = this.length; }
      if (to > this.length) {to = this.length; }
      console.log("from", from);
      console.log("to", to);
      this.smoothiesService.getSmoothiesShort(from, to).subscribe((listData) => {
        this.smoothies = listData;
        console.log("smoothies length", this.smoothies.length);
      });
    });

  }

  removeSmoothie(id, smoothieIndex) {
    this.smoothiesService.removeSmoothie(id).subscribe(() => {
      console.log('success');
    });
    this.smoothies.splice(smoothieIndex, 1);
  }

  updateView(event?:PageEvent) {
    let from = event.pageIndex * event.pageSize + 1;
    let to = from + event.pageSize - 1;
    this.getSmoothies(from, to);
  }
}
