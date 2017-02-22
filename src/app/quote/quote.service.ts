import { Injectable } from '@angular/core';
import {ProgrammingQuote} from "./quote-model";

@Injectable()
export class ProgrammingQuoteService {

  constructor() { }

  randomQuote() : ProgrammingQuote {
    const size = this.qoutes.length;
    const random = Math.floor(size * Math.random());
    return this.qoutes[random];
  }
  qoutes = [
    {
      "quote": "We sit in front of a computer screen and turn some seemingly random bits of electrical charge into improvement of the human condition. Isn’t that magical?",
      "author": "Eric Elliott",
      "source": "https://medium.com/javascript-scene/how-i-became-a-javascript-rock-star-df03e00dd03b#.hpn0jqfw7"
    },
    {
      "quote": "You can’t have great software without a great team...",
      "author": "Jim McCarthy",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "The most important single aspect of software development is to be clear about what you are trying to build.",
      "author": "Bjarne Stroustrup",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "First, solve the problem. Then, write the code.",
      "author": "John Johnson",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "Correctness is clearly the prime quality. If a system does not do what it is supposed to do, then everything else about it matters little.",
      "author": "Bertrand Meyer",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "Simplicity is prerequisite for reliability.",
      "author": "Edsger W. Dijkstra",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "You start with a small trivial project, and you should never expect it to get large.",
      "author": "Linus Torvalds",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "You need to get something half-way useful first, and then others will say “hey, that almost works for me”, and they’ll get involved in the project.",
      "author": "Linus Torvalds",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "Want to write fast software? Use an old computer!",
      "author": "Feross Aboukhadijeh",
      "source": "https://twitter.com/feross/status/791715744144916481"
    },
    {
      "quote": "You’re bound to be unhappy if you optimize everything.",
      "author": "Donald Knuth",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "Controlling complexity is the essence of computer programming.",
      "author": "Brian Kernighan",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "One of my most productive days was throwing away 1000 lines of code.",
      "author": "Ken Thompson",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "The unavoidable price of reliability is simplicity.",
      "author": "C.A.R. Hoare",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "author": "Brian W. Kernighan and P. J. Plauger in The Elements of Programming Style",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "Even bad code can function. But if the code isn’t clean, it can bring a development organization to its knees.",
      "author": "Robert C. Martin",
      "source": "https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/"
    },
    {
      "quote": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
      "author": "Bill Gates",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "Gear is the ultimate procrastination.",
      "author": "Mattias P Johansson",
      "source": "https://twitter.com/mpjme/status/719145682800635904"
    },
    {
      "quote": "Simplicity is the ultimate sophistication.",
      "author": "Leonardo da Vinci",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "The competent programmer is fully aware of the limited size of his own skull. He therefore approaches his task with full humility, and avoids clever tricks like the plague.",
      "author": "Edsger W. Dijkstra",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
      "author": "Linus Torvalds",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "Unix is simple. It just takes a genius to understand its simplicity.",
      "author": "Dennis Ritchie",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "Incorrect documentation is often worse than no documentation.",
      "author": "Bertrand Meyers",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "Code never lies, comments sometimes do.",
      "author": "Ron Jeffries",
      "source": "http://www.codingninja.co.uk/best-programmers-quotes/"
    },
    {
      "quote": "Software is like sex: it's better when it's free.",
      "author": "Linus Torvalds",
      "source": "https://en.wikiquote.org/wiki/Linus_Torvalds"
    },
    {
      "quote": "The biggest risk you can take is not taking any risk.",
      "author": "Mark Zuckerberg",
      "source": "https://www.youtube.com/watch?v=Lb4IcGF5iTQ"
    },
    {
      "quote": "JavaScript, being a loosely typed language, never casts. The lineage of an object is irrelevant. What matters about an object is what it can do, not what it is descended from.",
      "author": "Douglas Crockford",
      "source": "JavaScript: The Good Parts"
    },
    {
      "quote": "The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.",
      "author": "Joe Armstrong, The Gorilla Banana Problem",
      "source": "Coders at work"
    }
  ]
}


