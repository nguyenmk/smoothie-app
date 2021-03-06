import { RecipeComponent } from './recipe/recipe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SmoothiesComponent } from './smoothies/smoothies.component';
import { ContactComponent } from './contact/contact.component';
import { ManageComponent } from './manage/manage.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeActionComponent } from './recipe-action/recipe-action.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'smoothies',
    component: SmoothiesComponent
  },
  {
    path: 'recipe/id/:id',
    component: RecipeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  },
  {
    path: 'add/:id',
    component: RecipeAddComponent
  },
  {
    path: 'add',
    component: RecipeAddComponent
  },
  {
    path: 'action',
    component: RecipeActionComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
