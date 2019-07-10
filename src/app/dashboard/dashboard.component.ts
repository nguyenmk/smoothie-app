import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private mtitle: string;

  @Input() smoothie;

  constructor() { }

  ngOnInit() {
    this.title = 'Welcome to the smoothie world';
    this.smoothie = 'Banane';
  }

  set title(newTitle) {
    this.mtitle = newTitle;
  }

  get title() {
    return this.mtitle;
  }
}