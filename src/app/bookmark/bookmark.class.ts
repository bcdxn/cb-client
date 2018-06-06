export class Bookmark {
  name: string;
  imgUrl: string;
  url: string;

  constructor(n:string) {
    this.name = n;
    this.imgUrl = 'https://source.unsplash.com/random';
    this.url = 'https://www.abookmarkname.com';
  }
}