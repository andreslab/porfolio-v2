import { Component, OnInit } from '@angular/core';
import { PROJECTS, CATEGORIES } from './collection-projects';
import { Project } from './project';
import { Category } from './category';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})

export class PorfolioComponent implements OnInit {

  projects: Array<Project>  = PROJECTS;
  projectDetail: Project;

  categories: Array<Category> = CATEGORIES;
  categorySelected:Category;

  constructor() { }

  ngOnInit(): void {

  }

  onSelectProject(project:Project):void{
    this.projectDetail = project;
  }

  onSelectCategory(category:Category):void{
    console.log(category);
    this.categorySelected = category; //it null when select "All"
    if (category != null) {
      this.projects = [];
      for(var project of PROJECTS){
        if(project.category.id == category.id){
          this.projects.push(project);
        }
      }
    }else{
      this.projects = PROJECTS;
    }
  }

}
