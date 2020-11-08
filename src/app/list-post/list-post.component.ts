import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  @Input() posts: Array<{title: string, content: string, loveIts: number,bcreated_at: Date}>;

  constructor() { }

  ngOnInit(): void {
  }

}
