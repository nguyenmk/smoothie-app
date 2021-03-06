import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface Smoothie {
  _id?: string;
  title: string;
  ingredients: [ {nom: string; quantity: string} ];
  features: { cost?: string; prepareTime: string };
  advice?: string;
  description: string;
  steps: [ { stepText: string } ];
  photo?: { title?: string; path?: string; description?: string};
}

export interface SmoothieShort {
  _id: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})

export class SmoothiesService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient, private router: Router) {

  }

  // Get all smoothie
  getSmoothies(): Observable<Smoothie[]> {
    const smoothieListUrl = `${this.apiUrl}/catalog/list`;
    return this.http.get<Smoothie[]>(smoothieListUrl);
  }


  getSmoothiesShort(from, to): Observable<SmoothieShort[]> {
    const smoothieListUrl = `${this.apiUrl}/catalog/listShort/${from}/${to}`;
    return this.http.get<SmoothieShort[]>(smoothieListUrl);
  }

  // Get one smoothie
  getSmoothieById(id: string): Observable<Smoothie> {
    const getUrl = `${this.apiUrl}/catalog/recipe/${id}`;
    return this.http.get<Smoothie>(getUrl);
  }

  getSmoothieByTitle(fruit): Observable<Smoothie[]> {
    const getUrl = `${this.apiUrl}/catalog/recipe/fruit/${fruit}`;
    return this.http.get<Smoothie[]>(getUrl);
  }

  addSmoothie(data): Observable<Smoothie> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };
    const url = `${this.apiUrl}/catalog/recipe/add`;
    return this.http.post<Smoothie>(url, data, httpOptions);

  }

  removeSmoothie(id): Observable<{}> {
    const url = `${this.apiUrl}/catalog/remove/${id}`;
    console.log(url);
    return this.http.delete(url);
  }

  getNumRecords(): Observable<any> {
    const url = `${this.apiUrl}/catalog/count`;
    return this.http.get(url);
  }
}
