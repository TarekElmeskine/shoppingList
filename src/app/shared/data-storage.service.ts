import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';


@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  saveRecipes() {
    const token = this.authService.getToken();

    /* return this.http.put('https://ng-recipe-book-e0b6f.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
       {
         observe: 'body',
          // headers: new HttpHeaders().set('Authorization', 'Bearer sdsd')
         params: new HttpParams().set('auth', token)
       });*/

    const request = new HttpRequest(
      'PUT',
      'https://ng-recipe-book-e0b6f.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true
        // params: new HttpParams().set('auth', token)
      });

    return this.http.request(request);
  }

  fetchRecipes() {
    const token = this.authService.getToken();

    // return this.http.get<Recipe[]>('https://ng-recipe-book-e0b6f.firebaseio.com/recipes.json?auth=' + token)
    return this.http.get<Recipe[]>('https://ng-recipe-book-e0b6f.firebaseio.com/recipes.json',
      {
        observe: 'body',
        responseType: 'json'
      })
      .map(
        (recipes) => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      );
  }
}
