import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list/shooping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

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

  addIngredientsToShoppingList (ingredients: Ingredient[]) {
    this.slService.addingredients(ingredients);
  }
}
