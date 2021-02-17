import { Component, OnInit ,Input} from '@angular/core';
declare var $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  //componente hijo recoje la variable que estamos pasando
  @Input() anchura: number | undefined;

  constructor() { }

  ngOnInit(): void {
    $("#logo").click(function(e: { preventDefault: () => void; })
    { e.preventDefault();
      $("header").css("background","green")
                  .css("height","90px");
    });
    //slider
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      //variable anchura
      slideWidth: this.anchura
    });
  }

}
