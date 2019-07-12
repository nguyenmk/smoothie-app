import { Component, OnInit } from '@angular/core';
import { SmoothiesService, Smoothie } from '../smoothies.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-smoothies',
  templateUrl: './smoothies.component.html',
  styleUrls: ['./smoothies.component.css']
})
export class SmoothiesComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  selected = new Set();
  private mSmoothies: Smoothie[];

  constructor(private smoothiesService: SmoothiesService) {

  }


  ngOnInit() {

    this.getAllSmoothies();
  }

  // setter for smoothies
  set smoothies(newSmoothieList) {
    this.mSmoothies = newSmoothieList;
  }

  // getter for smoothies
  get smoothies() {
    return this.mSmoothies;
  }

  getAllSmoothies() {
    this.smoothiesService.getSmoothies().subscribe( (smoothiesData) => {
        this.smoothies = smoothiesData;
        for (const smoothie of this.smoothies) {
          this.options.push(smoothie.title);
        }

        this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
        const result = this.smoothies.filter(smoothie => smoothie.title.toLowerCase().includes('frais'));
      }
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filteredList = this.smoothies.filter(smoothie => smoothie.title.toLowerCase().includes(filterValue));
    const result: string[] = [];
    this.selected.clear();
    for (const filter of filteredList) {
      this.selected.add(filter._id);
      result.push(filter.title);
    }
    return result;
  }
}
