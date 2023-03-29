import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-qwork',
  templateUrl: './qwork.component.html',
  styleUrls: ['./qwork.component.css']
})
export class QworkComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    // margin:1,
    navText: ['', ''],
    items:1,
    autoplay:true,
    autoplaySpeed:3000,
    // nav: true,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   740: {
    //     items: 3
    //   },
    // },
  }
}
