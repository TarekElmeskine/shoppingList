import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://img-3.journaldesfemmes.fr/h5BMkASKhHha-Rk1OhqTVN_ModM=/750x/smart/7ec9c7cc57a844c4acf11ea8313519b2/recipe-jdf/10018962.jpg'),
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://img-3.journaldesfemmes.fr/h5BMkASKhHha-Rk1OhqTVN_ModM=/750x/smart/7ec9c7cc57a844c4acf11ea8313519b2/recipe-jdf/10018962.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
