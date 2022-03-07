import { Component } from '@angular/core';
import wordArr from "../uitils/words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  word = '';
  limit=10;

  handleSlideChange(newLimit : any){
    this.limit = +newLimit.value;
    console.log(this.limit);
    
    // this.limit = +(newLimit.target as HTMLInputElement).value;
    
  }
  generate(){
    this.word =  wordArr.slice(0, this.limit).join(" ");
    console.log(this.word);
    
  }

}
