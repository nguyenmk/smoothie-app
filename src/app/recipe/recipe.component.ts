import { Component, OnInit } from '@angular/core';
import { SmoothiesService } from '../smoothies.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public smoothie;

  constructor(private smoothiesService: SmoothiesService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const smoothieId = this.route.snapshot.paramMap.get('id');
    this.smoothiesService.getSmoothieById(smoothieId).subscribe((data) => {
      this.smoothie = data;
    });
  }

}
