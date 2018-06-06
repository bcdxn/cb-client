import { Component, OnInit, Input } from '@angular/core';
import { Bookmark } from 'src/app/bookmark/bookmark.class';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {

  @Input() bookmarks: Bookmark[];

  constructor() { }

  ngOnInit() {
  }

}
