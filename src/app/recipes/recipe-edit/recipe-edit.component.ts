import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  editMode = false;
  @ViewChild('f')
  formSubmit: NgForm;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(+params['id']);
        this.editMode = params['id'] != null
      }
    );
  }

  onSubmit() {
    const id = this.route.snapshot.params['id'];
    console.log('the id: '+id);
    if (id != null) {
      this.recipeService.removeRecipe(id);
    }
    this.recipeService.addRecipe(this.recipe);
  }
}
