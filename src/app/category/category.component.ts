import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit
{
  categoryRef = new FormGroup
  ({
    categoryName:new FormControl(),
    categoryDescription:new FormControl()
  });
  
  categories:Array<Category>=[];
  constructor(public categoryService:CategoryService){}

  // this code executes only once when component gets created
  ngOnInit(): void {
    this.categoryService.loadAllCategoryInformation().subscribe
    ({
        next:(result:any)=>
        {
          this.categories=result;
        },
        error:(error:any)=>
        {
          console.log(error);
        },
        complete:()=>
        {
          console.log("done!");
        }
    });
  }
}
