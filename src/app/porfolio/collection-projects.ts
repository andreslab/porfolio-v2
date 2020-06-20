import { Project } from './project';
import { Category } from './category';

export const CATEGORIES: Array<Category> = [
  {id:0, name:"Web"},
  {id:1, name:"App"},
  {id:2, name:"Hardware"},
  {id:3, name:"Security"}
]

export const PROJECTS: Array<Project> = [
  {id:0, name:"PAAS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus tortor ipsum, ac ultrices magna semper sed. Fusce pharetra lectus et sagittis venenatis. Sed sodales facilisis urna. Cras maximus, sem non ornare euismod, eros eros tempor tellus, eu semper elit lorem id velit. Vestibulum a lectus eros. In consequat ultrices laoreet. Cras finibus porta nisi et tristique. Praesent placerat sagittis neque in pulvinar.", category: CATEGORIES[0]},
  {id:1, name:"SAMMY", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus tortor ipsum, ac ultrices magna semper sed. Fusce pharetra lectus et sagittis venenatis. Sed sodales facilisis urna. Cras maximus, sem non ornare euismod, eros eros tempor tellus, eu semper elit lorem id velit. Vestibulum a lectus eros. In consequat ultrices laoreet. Cras finibus porta nisi et tristique. Praesent placerat sagittis neque in pulvinar.", category: CATEGORIES[1]},
  {id:2, name:"PORFOLIO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus tortor ipsum, ac ultrices magna semper sed. Fusce pharetra lectus et sagittis venenatis. Sed sodales facilisis urna. Cras maximus, sem non ornare euismod, eros eros tempor tellus, eu semper elit lorem id velit. Vestibulum a lectus eros. In consequat ultrices laoreet. Cras finibus porta nisi et tristique. Praesent placerat sagittis neque in pulvinar.", category: CATEGORIES[2]},
  {id:3, name:"SMARTCROP", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus tortor ipsum, ac ultrices magna semper sed. Fusce pharetra lectus et sagittis venenatis. Sed sodales facilisis urna. Cras maximus, sem non ornare euismod, eros eros tempor tellus, eu semper elit lorem id velit. Vestibulum a lectus eros. In consequat ultrices laoreet. Cras finibus porta nisi et tristique. Praesent placerat sagittis neque in pulvinar.", category: CATEGORIES[3]},
  {id:4, name:"PRINT3D", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus tortor ipsum, ac ultrices magna semper sed. Fusce pharetra lectus et sagittis venenatis. Sed sodales facilisis urna. Cras maximus, sem non ornare euismod, eros eros tempor tellus, eu semper elit lorem id velit. Vestibulum a lectus eros. In consequat ultrices laoreet. Cras finibus porta nisi et tristique. Praesent placerat sagittis neque in pulvinar.", category: CATEGORIES[2]}
]


