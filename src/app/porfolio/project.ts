import { Category } from './category';

export interface Project{
  id: number;
  name: string;
  description: string;
  category: Category;
}
