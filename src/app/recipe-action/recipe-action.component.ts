import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray, ControlContainer } from '@angular/forms';
import { SmoothiesService, Smoothie } from '../smoothies.service';

@Component({
  selector: 'app-recipe-action',
  templateUrl: './recipe-action.component.html',
  styleUrls: ['./recipe-action.component.css']
})

export class RecipeActionComponent {
  @Input() action = "add";
  @Input() recipeId:string;

  profileForm = this.fb.group({
    title: ['', Validators.required],
    ingredients: this.fb.array([
      this.fb.group({
        nom: [''],
        quantity: ['']
      })
    ]),
    features: this.fb.group({
      cost: [''],
      prepareTime: ['']
    }),
    advice: [''],
    description: [''],
    steps: this.fb.array([
      this.fb.group({
        stepText: ['']
      })
    ]),
    photo: this.fb.group({
      title: [''],
      path: [''],
      description: ['']
    }),
  });

  get ingredients() {
    return this.profileForm.get('ingredients') as FormArray;
  }
  get steps() {
    return this.profileForm.get('steps') as FormArray;
  }

  constructor(private fb: FormBuilder, private smoothiesService: SmoothiesService) { }


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        nom: '',
        quantity: ''
      })
    );
  }

  addStep() {
    this.steps.push(
      this.fb.group({
        stepText: ''
      })
    );
    console.log('steps', this.steps.controls);
  }

  onSubmit() {
    this.smoothiesService.addSmoothie(this.profileForm.value).subscribe((returnData) => {
      const smoothie: Smoothie = returnData;
      console.log('smoothie', smoothie);
    });
    console.log(this.profileForm.value);
    // TODO: Use EventEmitter with form value
    //console.warn(this.profileForm.value);
  }

}
