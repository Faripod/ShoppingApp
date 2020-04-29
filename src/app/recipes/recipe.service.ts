import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Great imperial Chicken',
     'Spicy Hot chicken with taste of Mexico',
      'https://www.justataste.com/wp-content/uploads/2014/09/roast-chicken-garlic-lemon-recipe.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Potato', 7)
      ]),
    new Recipe(
      'Lasagne alla Bolognese',
      'Tipical Italian food - Just Awesome!',
      'https://i.ytimg.com/vi/sYZosYVXioA/maxresdefault.jpg',
      [
        new Ingredient('Ragu', 2),
        new Ingredient('Pasta sfoglia', 20)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    //return exact copy of the array
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList (ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
