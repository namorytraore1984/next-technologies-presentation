import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'next-technologies-presentation';
  test = "namory";

  login1(formValues: any): void {
    console.log("Connexion encours : " + JSON.stringify(formValues));
  }
}
