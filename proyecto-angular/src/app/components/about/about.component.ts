import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  /*lo que se divide en sobre mi*/
  public title:string;
  public subtitle:string;
  public email: string;
  public web:string;

  constructor() { 
    this.title = "Mario Salamanca";
    this.subtitle = "Desarrollador web";
    this.email = "mariosalamanca64@hotmail.com";
    this.web = "mariosalamanca.com";
  }

  ngOnInit(): void {
  }

}
