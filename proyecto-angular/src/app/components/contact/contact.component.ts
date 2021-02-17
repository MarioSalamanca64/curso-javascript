import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider:number | undefined;
  //para el metodo enter
  public anchuraToSlider: any;
 

  constructor() { }

  ngOnInit() {
  }
  //para el metodo enter
  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }
  resetarSlider(){
    this.anchuraToSlider = false;
  }

}
