import { Component, OnInit, Input } from '@angular/core';
import { SmoothiesService } from '../smoothies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public smoothie;
  @Input() recipeId: string;

  constructor(private smoothiesService: SmoothiesService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (!this.recipeId) {
      this.recipeId = this.route.snapshot.paramMap.get('id');
    }
    console.log(this.recipeId);
    this.smoothiesService.getSmoothieById(this.recipeId).subscribe((data) => {
      this.smoothie = data;
    });
  }

}
