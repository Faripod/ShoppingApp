import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply text', 'https://www.justataste.com/wp-content/uploads/2014/09/roast-chicken-garlic-lemon-recipe.jpg'),
    new Recipe('A Test Recipe', 'This is a simply text', 'https://www.justataste.com/wp-content/uploads/2014/09/roast-chicken-garlic-lemon-recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
