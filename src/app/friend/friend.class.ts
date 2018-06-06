import { Bookmark } from "../bookmark/bookmark.class";

export class Friend {
  name: string;
  bookmarks: Bookmark[];

  constructor(n:string) {
    this.name = n;
    // this.bookmarks = [new Bookmark('bookmark1')];
    this.bookmarks = [new Bookmark('bookmark1'), new Bookmark('bookmark2'), new Bookmark('bookmark3')];
  }
}