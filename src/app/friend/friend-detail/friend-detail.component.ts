import { Component, OnInit, Input } from '@angular/core';
import { Friend } from 'src/app/friend/friend.class';

import * as octicons from 'octicons';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.css']
})
export class FriendDetailComponent implements OnInit {

  @Input() friend: Friend;

  constructor(private appService: AppService) { }

  ngOnInit() {
    console.log('bookmarks: ' + this.friend.bookmarks.length)
  }

  close() {
    this.appService.clearFriendDetail();
  }

}
