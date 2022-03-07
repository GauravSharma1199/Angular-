import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Counter App';
  count: number = 0;

  IncreseCount = () => {
    if (this.count < 10) {
      console.log("incresed");
      this.count += 1;
    }
  };

  DecreseCount = () => {
    if (this.count > 0) {
      console.log("decresed");
      this.count -= 1;
    }
  };

  ResetCount = () => {
    this.count = 0;
  };
}
