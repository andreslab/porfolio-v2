import { Category } from './category';

export interface Project{
  id: number;
  name: string;
  description: string;
  category: Category;
  created: string;
  status: Status;
}

export enum Status {
  ALPHA= "ALPHA",
  BETA= "BETA",
  RELEASE= "RELEASE"
}
