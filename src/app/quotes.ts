export class Quote {
  showAuthor: boolean;
  constructor(public id: number, public lines: string,  public author: string,  public name: string, public createdDate: Date, public upvotes:number, public downvotes:number, ){
    this.showAuthor=false;
  }
}
