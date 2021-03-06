import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quote: Quote[] = [
    new Quote(1, 'I think the people in this country have had enough of experts with organisations from acronyms saying that they know what is best and getting it consistently wrong.', 'Benitha','Janet', new Date(2021,3,14),0,0),
    new Quote(2,'Always end your book with Nelson Mandela saying something about rainbows or renaissances. Because you care.','Ange','Naomy',new Date(2021,5,9),0,0),
    new Quote(3,'How many legs does a dog have if you call his tail a leg? Four. Saying that a tail is a leg doesnt make it a leg.','Diana','Tina', new Date(2020,4,12),0,0),
    new Quote(4,'Having a positive mental attitude is asking how something can be done rather than saying it cant be done.','Angelic','Tharcissie',new Date(2021,3,18),0,0),
    new Quote(5,'Stop saying these negative things about yourself. Look in the mirror and find something about yourself thats positive and celebrate that!','Ganza','Lyse', new Date(2021,2,14),0,0),
    new Quote(6,'They invented hugs to let people know you love them without saying anything.','Adeline','Divine',new Date(2021,1,14),0,0),
  ];

  toggleDetails(index:any){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  deleteQuote(isComplete:boolean, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].quote}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  addNewQuote(quote:any){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
