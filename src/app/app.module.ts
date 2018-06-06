import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MyAppComponent } from './app.component';
import { FriendItemComponent } from './friend/friend-item/friend-item.component';
import { ControlBarComponent } from './control-bar/control-bar.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { FriendDetailComponent } from './friend/friend-detail/friend-detail.component';
import { BookmarkListComponent } from './bookmark/bookmark-list/bookmark-list.component';
import { BookmarkItemComponent } from './bookmark/bookmark-item/bookmark-item.component';

import { OcticonDirective } from './directives/octicon.directive';
import { ClickStopPropagation } from './directives/click-stop-propagation.directive';

import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    MyAppComponent,
    FriendItemComponent,
    ControlBarComponent,
    FriendListComponent,
    FriendDetailComponent,
    BookmarkListComponent,
    BookmarkItemComponent,
    OcticonDirective,
    ClickStopPropagation,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MyAppComponent]
})
export class AppModule { }
