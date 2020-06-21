import { Project, Status } from './project';
import { Category } from './category';

export const CATEGORIES: Array<Category> = [
  {id:0, name:"Web"},
  {id:1, name:"App"},
  {id:2, name:"Hardware"},
  {id:3, name:"Security"}
]

export const PROJECTS: Array<Project> = [
  {id:0, name:"PORJECT 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus tortor ipsum, ac ultrices magna semper sed.", category: CATEGORIES[0], created: "12/12/20" , status: Status.BETA},
  {id:1, name:"PORJECT 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus tortor ipsum, ac ultrices magna semper sed.", category: CATEGORIES[1], created: "12/12/20" , status: Status.ALPHA},
  {id:2, name:"PORJECT 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus tortor ipsum, ac ultrices magna semper sed.", category: CATEGORIES[2], created: "12/12/20" , status: Status.RELEASE},
  {id:3, name:"PORJECT 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus tortor ipsum, ac ultrices magna semper sed.", category: CATEGORIES[3], created: "12/12/20" , status: Status.BETA},
  {id:4, name:"PORJECT 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus tortor ipsum, ac ultrices magna semper sed.", category: CATEGORIES[2], created: "12/12/20" , status: Status.ALPHA}
]


