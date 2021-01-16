import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iraitech';
  storedtext : number
  finalnumber : number

  onget(event)
  {this.storedtext = event.target.value
    if (this.storedtext%2===0){
      this.finalnumber=(this.storedtext*this.storedtext)-1
    }
    else{
      this.finalnumber=(this.storedtext*this.storedtext)+1
    }

 }
}
