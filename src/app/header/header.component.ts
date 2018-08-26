import {Component} from '@angular/core';
import {RecipeService} from "../recipes/recipe.service";
import {ServerService} from "../shared/data-storage.service";
import {Recipe} from "../recipes/recipe.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService, private serverService: ServerService) {
  }

  onSave() {
    this.serverService.saveRecipes(this.recipeService.getRecipes())
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onGet() {
    this.serverService.fetchRecipes()
      .subscribe(
        (recipes: Recipe[]) => {
          console.log(recipes);
          this.recipeService.setRecipes(recipes)
        }
      );
  }

}
