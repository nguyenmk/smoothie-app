import { Component, OnInit, Input} from '@angular/core';
import { SmoothiesService, Smoothie } from '../smoothies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private mtitle: string;
  private mSmoothies: Smoothie[];

  constructor(private smoothiesService: SmoothiesService) {
    smoothiesService.getSmoothies().subscribe( (smoothiesData) => {
        this.smoothies = smoothiesData;
      }
    );
  }

  ngOnInit() {
    this.title = 'Welcome to the smoothie world';
  }

  // setter for title
  set title(newTitle) {
    this.mtitle = newTitle;
  }

  // getter for title
  get title() {
    return this.mtitle;
  }

  // setter for smoothies
  set smoothies(newSmoothieList) {
    this.mSmoothies = newSmoothieList;
  }

  // getter for smoothies
  get smoothies() {
    return this.mSmoothies;
  }
}