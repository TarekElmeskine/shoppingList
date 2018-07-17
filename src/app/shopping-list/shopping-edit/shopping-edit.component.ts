import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('amountInput')
  amountInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddIngredient(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    console.log(this.amountInput.nativeElement.value);
    this.ingredientAdded.emit(new Ingredient(nameInput.value, this.amountInput.nativeElement.value));
  }
}
