import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at: Date;

  constructor() { }

  ngOnInit(): void {
  }

  addLove(){
    this.postLoveIts = this.postLoveIts + 1;
  }

  subLove(){
    this.postLoveIts = this.postLoveIts - 1 ;
  }



}
