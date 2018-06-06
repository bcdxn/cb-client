import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Friend } from "src/app/friend/friend.class";

@Injectable()
export class AppService {
  private friendDetailSource = new Subject<Friend>();
  private viewStateSource = new Subject<string>();

  friendDetail$ = this.friendDetailSource.asObservable();
  viewState$ = this.viewStateSource.asObservable();

  setFriendDetail(friend: Friend) {
    this.friendDetailSource.next(friend);
    this.viewStateSource.next('FRIEND_DETAIL');
  }

  clearFriendDetail() {
    this.viewStateSource.next('FRIENDS_LIST');
  }
}