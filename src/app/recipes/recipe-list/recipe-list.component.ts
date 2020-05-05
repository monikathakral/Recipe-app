import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Chocolate cake", "Chococlate cake using oreo biscuits", "../../../assets/snicker-chocolate-cake.jpg"),
    new Recipe("Zucchini slice", "Zucchini slice", "../../../assets/zucchini-slice.jpeg"),
    new Recipe("Mango ice cream", "Mango ice cream with nuts", "../../../assets/mango-ice-cream.jpg")
  ];
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
