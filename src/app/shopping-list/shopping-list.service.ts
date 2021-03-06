import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {

  ingredientAddedEvent = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];


  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAddedEvent.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAddedEvent.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientAddedEvent.next(this.ingredients.slice());
  }

  deleteIngredient(editItemIndex: number) {
    this.ingredients.splice(editItemIndex , 1);
    this.ingredientAddedEvent.next(this.ingredients.slice());
  }
}
