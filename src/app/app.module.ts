
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatToolbarModule, MatButtonModule, MatGridListModule, MatFormFieldModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import { SmoothiesComponent } from './smoothies/smoothies.component';
import { RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ContactComponent } from './contact/contact.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { ManageComponent } from './manage/manage.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SmoothiesComponent,
    RecipeComponent,
    ContactComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
