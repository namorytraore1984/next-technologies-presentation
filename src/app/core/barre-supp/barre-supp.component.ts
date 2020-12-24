import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-barre-supp',
  templateUrl: './barre-supp.component.html',
  styleUrls: ['./barre-supp.component.css']
})
export class BarreSuppComponent implements OnInit {

  constructor(public auth: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    console.log(this.auth);
    this.auth.logout();
    this.router.navigate(['']);
  }

}
