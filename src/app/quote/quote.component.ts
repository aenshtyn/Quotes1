import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes: Quote [] = [
    new Quote(1,'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.' ,'Albert Einstein',  'Moha' , new Date(1980,3,14) , 0 , 0,),
    new Quote(2,'Life begins when fear of being wrong ends' ,'The Joker',  'Crystal' ,new Date(2012,3,14) , 0 , 0,),
    new Quote(3,'If you are good at something, never do it for free' ,'The Joker',  'Ian' ,new Date(2002,3,14) , 0 , 0,),
    new Quote(4,'Try not to become a man of success, but rather try to become a man of value.' ,'Albert Einstein',  'James' ,new Date(1965,3,14) , 0 , 0,),
    new Quote(5,'Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.' ,'G. R. R. Martin',  'Moha' ,new Date(2012,3,14) , 0 , 0,),
    new Quote(6,'The powerful have always preyed on the powerless. That’s how they became powerful in the first place.' ,'Tyrion Lannister',  'Moha' , new Date(2015,3,14) , 0 , 0,),
    new Quote(7,'The purpose of our lives is to be happy.”' ,'Dalai Lama',  'Moha' ,new Date(2017,3,14) , 0 , 0,),
    new Quote(8,'If you do not like the road you are walking, start paving another one' ,'Dolly Parton',  'Moha' ,new Date(2018,3,14) , 0 , 0,),
    new Quote(9,'“The hard part is nt making the decision. It is living with it ','Bruce McGill', 'Paul' , new Date(2019,3,14) , 0 , 0,),
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quotes ){
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength+1;
    quotes.createdDate = new Date(quotes.createdDate)
    quotes.upvotes = 0
    quotes.downvotes = 0
    this.quotes.push(quotes)
  }
  // quoteUpvote() {
  // this.quotes.upvotes += 1;
  // }
  //
  // quoteDownvote() {
  // this.quotes.downvotes += 1;
  // }

  constructor() {}

  ngOnInit(){
  }
}
