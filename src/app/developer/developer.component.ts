import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developer: Developer;

  constructor() { 
    this.developer = new Developer(
    "Jauffrit", 
    "Charly", 
    30, 
    "male", 
    "J'adore Angular !!!", 
    [new Skill("angular", "logo angular", "site Angular"),
    new Skill("java", "logo Java", "site Java"),
    new Skill("JS", "Logo Js", "site Js")])
  }

  ngOnInit() {
  }

}
