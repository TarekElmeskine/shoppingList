import {Component} from '@angular/core';
import {RecipeService} from "../recipes/recipe.service";
import {DataStorageService} from '../shared/data-storage.service';
import {Recipe} from "../recipes/recipe.model";
import {Response} from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService, private dataStorageService: DataStorageService) {
  }

  onSave() {
    this.dataStorageService.saveRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onGet() {
    this.dataStorageService.fetchRecipes()
      .subscribe(
        (recipes: Recipe[]) => {
          console.log(recipes);
          this.recipeService.setRecipes(recipes)
        }
      );
  }

}
