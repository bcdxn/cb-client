import { Component, OnInit, Input } from '@angular/core';
import { Bookmark } from 'src/app/bookmark/bookmark.class';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.css']
})
export class BookmarkItemComponent implements OnInit {

  @Input() bookmark: Bookmark;

  constructor() { }

  ngOnInit() {
  }

}
