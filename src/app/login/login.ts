import { Component } from '@angular/core';
import { Nav } from "../nav/nav";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Nav, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
