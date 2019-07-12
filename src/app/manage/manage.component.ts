import { Component, OnInit } from '@angular/core';
import { SmoothiesService } from '../smoothies.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  public smoothies;

  constructor(private smoothiesService: SmoothiesService) { }

  ngOnInit() {
    this.smoothiesService.getSmoothies().subscribe( (smoothiesData) => {
        this.smoothies = smoothiesData;
        console.log(this.smoothies);
      }
    );
  }

}
