import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../friend.class';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  @Input() friends:Friend[];

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}
