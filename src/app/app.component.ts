import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from './friend/friend.class';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class MyAppComponent {

  viewState = 'FRIENDS_LIST';
  friendList: Friend[] = [new Friend('fayefarrahfang'), new Friend('notalexvann'), new Friend('bdxn')];
  selectedFriend: Friend = this.friendList[0];

  private listWrapperClasses: string[] = ['list-wrapper', 'focus'];
  private detailWrapperClasses: string[] = ['detail', 'no-focus'];

  constructor(private appService: AppService) {
    
    appService.viewState$.subscribe((state) => {
      console.debug("state:" + state);
      if (state === 'FRIENDS_LIST') {
        this.listWrapperClasses = ['list-wrapper', 'focus'];
        this.detailWrapperClasses = ['detail', 'no-focus'];
      } else {
        this.listWrapperClasses = ['list-wrapper', 'no-focus'];
        this.detailWrapperClasses = ['detail', 'focus'];
      }
    });

    appService.friendDetail$.subscribe((friend) => {
      this.selectedFriend = friend;
    });
  }

  closeFriendsDetail() {
    this.appService.clearFriendDetail();
  }
}