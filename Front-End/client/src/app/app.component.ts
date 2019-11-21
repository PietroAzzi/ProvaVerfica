import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  scorpion : string[];
  constructor(public http: HttpClient){
  }

  MostraScorpioni(){
    this.http.get("https://3000-ae8b4df8-d99a-4102-a6b3-c2132f9f2724.ws-eu01.gitpod.io/api/scorpioni").subscribe(data => {
      this.scorpion = data['scorpions'];
      console.log(this.scorpion);
    })
  }
}
