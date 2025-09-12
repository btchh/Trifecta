import { Component } from '@angular/core';
import { Nav } from "../nav/nav";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [Nav, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

}
