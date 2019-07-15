import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { SmoothiesService, Smoothie } from '../smoothies.service';
import { ActivatedRoute } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';


export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})

export class RecipeAddComponent  implements OnInit {
  @Input() recipeId:string;
  smoothie: Smoothie;

  profileForm = this.fb.group({
    title: ['aaa'],
    ingredients: this.fb.array([
      this.fb.group({
        nom: ['bbb'],
        quantity: ['ccc']
      })
    ]),
    features: this.fb.group({
      cost: ['ddd'],
      prepareTime: ['eee']
    }),
    advice: ['fff'],
    description: ['ggg'],
    steps: this.fb.array([
      this.fb.group({
        stepText: ['hhh']
      })
    ]),
    photo: this.fb.group({
      title: ['iii'],
      path: ['kkk'],
      description: ['mmm']
    }),
  });

  get ingredients() {
    return this.profileForm.get('ingredients') as FormArray;
  }
  get steps() {
    return this.profileForm.get('steps') as FormArray;
  }

  constructor(private fb: FormBuilder, private smoothiesService: SmoothiesService, private route: ActivatedRoute) { }


  ngOnInit() {
    if (!this.recipeId) {
      this.recipeId = this.route.snapshot.paramMap.get('id');
    }

    if (this.recipeId != null) {
      this.smoothiesService.getSmoothieById(this.recipeId).subscribe((data: Smoothie) => {
        this.smoothie = data;

        const ingredientsForm = this.profileForm.get("ingredients") as FormArray;
        for (let it of this.ingredients.controls) {
          console.log("it", it);
        }
        const stepsForm = this.profileForm.get("steps") as FormArray;
        for (let ingredient of this.smoothie.ingredients) {this.addIngredient()};

        for (let step of this.smoothie.steps) {this.addStep()};
        this.profileForm.patchValue(this.smoothie);
      });

    }
  }

  addIngredient() {
    this.ingredients.push(
      this.fb.group({ nom: '', quantity: '' })
    );
  }

  removeIngredientAt(index) {
    this.ingredients.removeAt(index);
  }

  addStep() {
    this.steps.push(
      this.fb.group({ stepText: '' })
    );
  }

  removeStepAt(index) {
    this.steps.removeAt(index);
  }

  onSubmit() {
    this.smoothiesService.addSmoothie(this.profileForm.value).subscribe((returnData) => {
      const smoothie: Smoothie = returnData;
      console.log('smoothie', smoothie);
    }, errors => {
      console.log(errors);
    });
    console.log(this.profileForm.value);
    // TODO: Use EventEmitter with form value
    //console.warn(this.profileForm.value);
  }

  checkProfileForm() {
    console.log("profileform valid", this.profileForm.valid);
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      const items = value.trim().split(':');
      if (items.length > 0) {
        const text = items[0];
        let qty = '';
        if (items.length > 1) {
          qty = items[1];
        }
        this.ingredients.push(
          this.fb.group({ nom: text.trim(), quantity: qty.trim() })
        );
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

}
