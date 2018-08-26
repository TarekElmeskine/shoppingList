import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Recipe} from "../recipes/recipe.model";


@Injectable()
export class ServerService{
  constructor(private http: Http){}

  saveRecipes(recipes: Recipe []){
    return this.http.put('https://ng-recipe-book-e0b6f.firebaseio.com/data.json', recipes);
  }
  fetchRecipes(){
    return this.http.get('https://ng-recipe-book-e0b6f.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
