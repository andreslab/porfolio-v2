import { Component, OnInit } from '@angular/core';
import { BLOGS } from './collection-blog';
import { Blog } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: Array<Blog> = BLOGS;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectBlog(blog:Blog):void{
    console.log(blog.name);
  }

}
