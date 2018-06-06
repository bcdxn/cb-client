import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Friend } from '../friend.class';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css']
})
export class FriendItemComponent implements OnInit {

  @Input() friend: Friend;
  @Output() friendDetailEvent = new EventEmitter<Friend>();

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  selectFriend(friend: Friend) {
    console.log(friend.name)
    this.appService.setFriendDetail(friend);
  }

}
